
import './Frame1'
import React, { Component } from 'react'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { firestoreConnect } from 'react-redux-firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import style from './f.module.css'
import Edit from './Edit'
import { Link } from 'react-router-dom'
import Loading from '../data/Loading'
class Getframe1 extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
    }
    render() {

        // const { value, auth } = this.props.location.state;
        const { auth, aka } = this.props;
        if (aka) {
            const { head, content, date, name, email } = this.props.aka[0];
            return (

                <div className='Layouts'>
                    <div className='headgfr'><p className='publishid'>Published on {new Date(date).toLocaleDateString("en-US")}</p>
                        <p className='byid'>By :{email} </p></div>
                    {window.innerWidth <= 500 ? (
                        <div><h1 className='h11'> {head}</h1> </div>
                    ) : (
                            <div><h1 className='h112'> {head}</h1>  </div>
                        )}

            }



                    <textarea name="area" readOnly className={style.p12} value={content} width='100%'></textarea>
                    <img className='img' src="" alt="Not found" />
                    {auth.email === email
                        ? (
                            <Link style={{ backgroundColor: "red" }} to={{ pathname: `/Edit/${name}`, state: { value: this.props.aka[0] } }} className='button156'>  Edit or Delete</Link>)
                        : (null)}


                </div>
            )
        }
        else {
            return (<Loading />)
        }
    }



}
Getframe1.propType = {
    value: PropTypes.array.isRequired
}
Getframe1.defultProps = {
    value: {
        head: 'not found',
        content: 'sorry not available',
        date: 'not published',
        name: 'not available'
    }
}

const mapStateToProps = state => {
    return {
        aka: state.firestore.ordered.post,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = {
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => [{ collection: 'post', doc: props.match.params.id }]), firebaseConnect()
)(Getframe1)