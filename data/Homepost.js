
import './Homepost.css'
import React, { Component } from 'react'

import Loading from './Loading'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { firebaseConnect } from 'react-redux-firebase';
import Grid from './Grid'



class Homepost extends Component {



    render() {


        if (this.props.aka) {
            return (
                <React.Fragment >
                    <div class='head980'>
                        Learn for fun and use it to gain billions!
                    </div>

                    <Grid />
                    <div className='fun'>
                        <div className='fun1'>

                        </div>
                        <div className='fun2'>
                            <div className='fun11'></div>
                            <div className='fun12'>0.9v</div>
                            <div className='fun31'>0.9v</div>
                            <div className='fun32'></div>
                        </div>
                        <div className='fun3'>

                        </div>
                    </div>

                    {this.props.aka.map(i => (
                        <React.Fragment key={i.id}>
                            <p className='versio'> {i.content} </p>
                            <hr />
                        </React.Fragment>

                    ))}



                </React.Fragment>
            )
        }
        else {
            return <Loading />
        }
    }
}

Homepost.proptype = {
    firestore: PropTypes.object.isRequired,
    firebase: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        aka: state.firestore.ordered.home,
        auth: state.firebase.auth,

    }
}
const mapDispatchToProps = {
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: 'home' }]), firebaseConnect()
)(Homepost)



