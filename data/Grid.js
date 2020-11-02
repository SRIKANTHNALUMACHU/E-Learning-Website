import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Loading from './Loading'
import './Grid.css'
import { Link } from 'react-router-dom'
class Grid extends Component {
    state = {

    }
    updateflash = (i) => {
        console.log("add code here")
    }
    render() {
        if (this.props.aka) {
            return (
                <React.Fragment>
                    <div className='fun' style={{ position: 'absolute', 'zIndex': '-1' }}>
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

                    <div className='flashdiv'>
                        <div className='lposts'>Latest Posts</div>
                        {this.props.aka[0].mi.map(i =>
                            (<Link key={i.id} to={{
                                pathname: `/aboutme/${i.id}`
                            }} >
                                <div className='flashcss' onClick={this.updateflash.bind(this, i)}>
                                    <div className='gridhead'> {i.name}</div>
                                    <div className='gridname'> {i.head}</div>
                                    {window.innerWidth >= 500 ? (
                                        <div className='griddate'>Published on :  {new Date(i.date).toLocaleDateString("en-US")}</div>
                                    )
                                        : (<div className='griddate'>{new Date(i.date).toLocaleDateString("en-US")}</div>
                                        )}
                                </div>
                            </Link>
                            ))}
                    </div></React.Fragment >
            )
        }
        else {
            return <Loading />
        }
    }
}

const mapStateToProps = state => {
    return {
        aka: state.firestore.ordered.flash,
    }
}

const mapDispatchToProps = {
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: 'flash', doc: 'play' }])
)(Grid)


/*
new Date().getTime()*/