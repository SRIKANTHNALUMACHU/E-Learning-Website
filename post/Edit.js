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


class Edit extends Component {
    state = {
        head: '',
        content: '',
        status: '',
        name: '',
        date: '',
        id: '',
    }

    onsubmit = (e) => {
        e.preventDefault();
        const { head, content, name } = this.state;
        const news = {

            head,
            content,
            name,
            email: this.props.auth.email,
            date: new Date().getTime()
        }
        const { firestore } = this.props;
        firestore.update({ collection: 'post', doc: this.state.id }, news).then(() => this.setState({ status: 'Changes Published...' }))

    }
    dele = (id) => {
        this.flashupdk();
        this.props.firestore.delete({ collection: 'post', doc: id }).then(this.props.history.push('/'))

    }
    flashupdk = () => {
        const news = {
            'mi': this.props.aka[0].mi.filter(i => i.id !== this.state.id)
        }
        this.props.firestore.update({ collection: 'flash', doc: 'play' }, news).then(() => console.log(news))
    }

    onchange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    letgetit = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }))
        }

    }
    upload = (e) => {
        var storageRef = firebase.storage().ref();
        var mountainsRef = storageRef.child(this.state.image.name);
        mountainsRef.put(this.state.image);

    }
    componentDidMount() {
        const { value } = this.props.location.state;

        const { head, content, date, name, email, id } = value;

        this.setState({
            head,
            content,
            date,
            name,
            email,
            id
        })

    }

    render() {

        return (

            <div className='Layout'>
                <form onSubmit={this.onsubmit}>
                    <div className='cont'>
                        <label className='p11' htmlFor="name">Content Name:</label>
                        <input name='name' className='h11' placeholder='Enter content name' value={this.state.name} onChange={this.onchange} type="text" />
                    </div>
                    <pre>
                        <h1 className='h11'> <textarea name='head' className='h11' value={this.state.head} onChange={this.onchange} placeholder="You Header Here"></textarea></h1>


                        <div className='cont'>
                            <p className=''> <textarea name='content' placeholder="Your content Here as lengthy as you need" className={style.p12} value={this.state.content} onChange={this.onchange} ></textarea></p>
                            <img className='img' src="" alt="Not found" />
                        </div>

                    </pre>

                    <input type='submit' value='Publish ...'
                        className='button156' />
                    <button className='button156' style={{ backgroundColor: "red" }} onClick={this.dele.bind(this, this.state.id)}>Delete</button>
                </form>
                <br />
                <hr /><hr /><hr />
                <h1 className='button156'>  {this.state.status}</h1>
                <input type="file" id='file' placeholder=' Upload FIle' onChange={this.letgetit} />
                <button onClick={this.upload} >Upload images</button>
            </div>
        )
    }
}

Edit.proptype = {
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
)(Edit)


