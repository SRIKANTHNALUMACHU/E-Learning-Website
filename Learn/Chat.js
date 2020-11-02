import React, { Component } from 'react'
import './chat.css';
import { firestoreConnect } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Loading from '../data/Loading';
class Chat extends Component {
    state = {
        code: '',
        chat: false,
        message: ''
    }
    enter = () => {
        if (this.state.code == '') { alert("Enter code!") }
        else {
            this.setState({ chat: true })
        }
    }
    send = () => {

    }
    onchange = e => { this.setState({ [e.target.name]: e.target.value }) }
    render() {

        if (this.state.chat) {
            {
                const li = this.state.code;
                if (this.props.aka) {
                    return (

                        <div>

                            <div className='chat1'>{this.props.aka.li}{li}{this.props.aka.map(i => (
                                <div key={i.id}>{i.mess}</div>
                            )

                            )}
                                {console.log(this.props.aka)}</div>
                            <div className="chat1">Your are now chatting in room id : {this.state.code}</div>
                            <div className="input"><input onChange={this.onchange} type="text" name='message' value={this.state.message} placeholder="Enter message" /></div>

                            <div className='Send'><button onClick={this.send}>Enter</button></div>

                        </div>
                    )
                }
                else { return (<div>Loading....</div>) }
            }
        }
        else {
            return (
                <div className='chat'>
                    <div className='chathead'>Lets chat</div>
                    <div className="chat1"><div>
                        Enter Unique chat Code to join:
                </div>
                        <div className="input"><input onChange={this.onchange} type="text" name='code' value={this.state.code} placeholder="Enter code" /></div>
                    </div>

                    <div className='enter'><button onClick={this.enter}>Enter</button></div>


                </div>
            )
        }
    }
}
const mapStateToProps = state => {
    return {
        aka: state.firestore.ordered.message,
        auth: state.firebase.auth,

    }
}

const mapDispatchToProps = {
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: 'message' }]), firebaseConnect()
)(Chat)