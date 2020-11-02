import React, { Component } from 'react'
import { firebaseConnect } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import GoogleLogin from 'react-google-login'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    signup(res) {
        const googleresponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            ProviderId: 'Google',
            googleId: res.profileObj.googleId

        };

        const { firebase } = this.props;
        const { email, googleId } = googleresponse;
        console.log(googleId);
        var pre = false;
        // aka.map(i => (i.email === email ? (pre = false) : null))
        var password = googleId.toString();
        firebase.login({ email, password }).catch(err => (
            pre = true));
        if (pre) {
            firebase.createUser({ email, password }).then(this.props.history.push('./'))
        }


    };
    onchange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onsubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        const { firebase } = this.props;
        firebase.login({ email, password }).catch(err => alert('Invalid LOgin Creditionals'));
    }
    render() {
        const { email, password } = this.state;
        const responseGoogle = (response) => {
            if (response) {
                var res = response.profileObj;
                console.log(res);
                this.signup(response);
            }

        }
        return (

            <div >
                <div className="col-md-6 mx-auto">
                    <div className="card justify-content-center">
                        <div className="card-body">
                            <h1 className="text-center pb-4 pt-3">
                                <span className="text-dark">
                                    Login
                              </span>
                            </h1>

                        </div>
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        />,
                {document.getElementById('googleButton')}
                    </div>
                </div>

            </div >
        )
    }
}
Login.propTypes = {
    firebase: PropTypes.object.isRequired
}
export default firebaseConnect()(Login)
/*<form onSubmit={this.onsubmit}>
                                <label htmlFor="email" className="form-group">
                                    Email
                               </label>
                                <input type="password" name='email' onChange={this.onchange} value={email} required className="form-control" />
                                <label htmlFor="password" className="form-group">
                                    Password </label>
                                <input type="text" name='password' onChange={this.onchange} value={password} required className="form-control" />
                                <button type='submit' style={{ float: 'right' }} className="btn btn-success">Submit</button>
                            </form>*/