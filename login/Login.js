import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import PropTypes from 'prop-types'
import { firebaseConnect } from 'react-redux-firebase'
import './Login.css'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../layout/bar/bar3.module.css'
class Login extends Component {



    logout = () => {
        this.props.firebase.login({
            provider: 'google',
            type: 'popup',
            // scopes: ['email'] // not required
        })


    }
    render() {
        if (window.innerWidth > 500) {
            return (
                <div className='show'>
                    <div className={style.bardes}>
                        <Link to='/' className={style.baritemdes}>Home</Link>
                        <Link to='/learn' className={style.baritemdes}>Learn</Link>
                        <Link to='/about' className={style.baritemdes}>Adout </Link>
                        <Link to='/songs' className={style.baritemdes}>SOngs </Link></div>
                    <span className={style.headlo}>
                        <span className={style.headlo1}>Learn From The Best!</span>
                        <span className={style.headlo2}></span>
                        <span className={style.headlo3}>Company : 77th Moon Light</span>
                    </span>
                    <div className='login99'>
                        <span className='login998'>Login with secured Google</span>
                        <button onClick={this.logout} className='login995'><span className='icongoogle'></span><span className='login996'>Login with Google</span> </button>
                        {
                            this.props.auth.displayName === undefined ? (null) : (<Redirect to='/' />)
                        }
                    </div>

                </div>
            )
        }

        else {
            return (
                <div className='show'>
                    <div className={style.bardes}>
                        <Link to='/' className={style.baritemdes}>Home</Link>
                        <Link to='/learn' className={style.baritemdes}>Learn</Link>
                        <Link to='/about' className={style.baritemdes}>Adout </Link>
                        <Link to='/songs' className={style.baritemdes}>SOngs </Link></div>
                    <span className={style.headlom}>
                        <span className={style.headlo1m}>Learn From The Best!</span>
                        <span className={style.headlo2m}></span>
                        <span className={style.headlo3m}>Company : 77th Moon Light</span>
                    </span>
                    <div className='login99m'>
                        <span className='login998m'>Login with secured Google</span>
                        <button onClick={this.logout} className='login995m'><span className='icongoogle'></span><span className='login996m'>Login with Google</span> </button>
                        {
                            this.props.auth.displayName === undefined ? (null) : (<Redirect to='/' />)
                        }
                    </div>

                </div>
            )
        }

    }
}
Login.propTypes = {
    firebase: PropTypes.object.isRequired
}
const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,

    }
}
const mapDispatchToProps = {
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firebaseConnect(),
)(Login)
