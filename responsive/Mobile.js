import React, { Component } from 'react'
import Main from '../layout/Main';
import Getframe1 from '../post/Getframe1'
import Loading from '../data/Loading'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { firebaseConnect } from 'react-redux-firebase'


import Allroutes from './Allroutes'
import { Link, Route } from 'react-router-dom'

class Mobile extends Component {
    state = {
        bar: 1,
        setvalue: {
            name: 'React',
            head: 'This is about react letts try',
            date: 'this is  a date',
            content: 'this is the content asdlfkjlaksdjfa fasjf'
        }
    }
    getcontent = (i) => {
        this.setState({ setvalue: i, bar: 2 });
    }
    /*    componentDidMount = () => {
           {
           fetch('https://api.ipify.org/?format=json')
                   .then(response => response.json())
                   .then(data => {
                       { this.props.firestore.collection('ip').doc('iphold').collection('iphold').add(data) }
                   });
           }
       }*/
    render() {

        const { aka } = this.props;
        if (aka) {
            return (
                <div>
                    <React.Fragment>
                        <Main />
                        <Allroutes />
                        <Route path='/aboutme/:id' component={Getframe1} />
                        <br />


                    </React.Fragment>
                    <React.Fragment>
                        <div className='baritem60'>
                            {
                                aka[0].mi.map(i => (
                                    <React.Fragment key={i.id}><Link to={{ pathname: `/aboutme/${i.id}`, state: { value: i, auth: this.props.auth } }} className='baritems59'>   {i.name}</Link>

                                    </React.Fragment>

                                ))
                            }</div>
                    </React.Fragment>
                </div>)
        }
        else {
            return <Loading />
        }
    }
}
Mobile.proptype = {
    firestore: PropTypes.object.isRequired,
    firebase: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        aka: state.firestore.ordered.flash,
        auth: state.firebase.auth,

    }
}

const mapDispatchToProps = {
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: 'flash', doc: 'play' }]), firebaseConnect()
)(Mobile)