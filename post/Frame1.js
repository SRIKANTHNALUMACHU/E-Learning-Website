import React, { Component } from 'react'
import './Frame1.css'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { firestoreConnect } from 'react-redux-firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/storage';

import style from './f.module.css'
class Frame1 extends Component {
    state = {
        head: '',
        content: '',
        status: '',
        name: '',
        date: 12345,
        image: null,

    }
    onsubmit = (e) => {
        e.preventDefault();

        var ids = '';
        const { head, content, name, date } = this.state;
        console.log(date);
        const news = {
            head,
            content,
            name,
            email: this.props.auth.email,
            date: new Date().getTime()
        }
        const { firestore } = this.props;
        firestore.add({ collection: 'post' }, news).then((docref) => {
            console.log(docref.id);

            console.log(docref.id);
            this.flashupd(docref.id)
        }
        )


    }
    flashupd = (id) => {
        const { head, name } = this.state;
        const mi = 'mi'
        const news = {
            'mi': [
                {
                    name,
                    head,
                    id,
                    date: new Date().getTime()
                }, ...this.props.aka[0].mi
            ]
        }
        this.props.firestore.update({ collection: 'flash', doc: 'play' }, news).then(() => console.log("Updated"))
        this.setState({ head: '', content: '', date: '', name: '' })
    }


    onchange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        /*
        */


        return (

            <div className='Layout'>


                <form onSubmit={this.onsubmit.bind(this)}>
                    <div className='cont'>
                        <label className='p11' htmlFor="name">Content Name:</label>
                        <input name='name' className='h11' placeholder='Enter content name' required value={this.state.name} onChange={this.onchange} type="text" />
                    </div>
                    <pre>
                        <h1 className='h11'> <textarea name='head' className='h11' required value={this.state.head} onChange={this.onchange} placeholder="You Header Here"></textarea></h1>


                        <div className='cont'>
                            <p className=''> <textarea name='content' required placeholder="Your content Here as lengthy as you need" className={style.p12} value={this.state.content} onChange={this.onchange} ></textarea></p>
                            <img className='img' src="" alt="Not found" />
                        </div>

                    </pre>

                    <input type='submit' value='Publish ...'
                        className='button1' />

                </form>

            </div>
        )
    }
}

Frame1.proptype = {
    firestore: PropTypes.object.isRequired
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
)(Frame1)


