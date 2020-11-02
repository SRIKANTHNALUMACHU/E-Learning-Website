//import React, { Component } from 'react'
import './Home.css'
import Mobile from './responsive/Mobile'
import Laptop from './responsive/Laptop';

import React from 'react'

export default function Home() {
    return (
        <div>
            {
                window.innerWidth <= 500 ? (
                    <div>
                        <Mobile />
                    </div>
                ) : (
                        <div>
                            <Laptop />
                        </div>
                    )

            }
        </div>
    )
}
/*
class Home extends Component {


    render() {


        const isMobile = window.innerWidth <= 500;



        if (isMobile) {
            return (
            )
        }
        else {
            return (

            )
        }

    }
}


export default Home;



import PropTypes from 'prop-types'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
Home.proptype = {
    firestore: PropTypes.object.isRequired
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
    firestoreConnect([{ collection: 'post' }]), firebaseConnect()
)(Home)*/


