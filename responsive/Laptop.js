import React, { Component } from 'react'
import Main from '../layout/Main';
import Getframe1 from '../post/Getframe1'
import Loading from '../data/Loading'
import Allroutes from './Allroutes'

import { Link, Route } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Laptop extends Component {
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
    updateflash = (i) => {
        {
            const news = {
                name: i.name,
                head: i.head,
                date: i.date,
                id: i.id
            }

            this.props.firestore.add({ collection: 'flash' }, news).then(() => console.log(news))
        }
    }
    render() {
        const { aka } = this.props;

        if (aka) {
            return (
                <div className="lay">
                    <div className="lay1">

                        {
                            aka[0].mi.map(i => (
                                <React.Fragment key={i.id}>

                                    <Link to={{ pathname: `/aboutme/${i.id}`, state: { value: i, auth: this.props.auth } }} className='baritem'>   {i.name}</Link>

                                </React.Fragment>))

                        }
                    </div>

                    <div className="lay2">
                        <Main />


                        <br />
                        <Allroutes />
                        <Route path='/aboutme/:id' component={Getframe1} />

                    </div>
                    <div className="lay3">
                        <img src='./logo1.png' alt="77th Moon Light" width='20%' height='10%' />
                    </div>
                </div >)
        }
        else {
            return <Loading />
        }

    }
}
Laptop.proptype = {
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
)(Laptop)