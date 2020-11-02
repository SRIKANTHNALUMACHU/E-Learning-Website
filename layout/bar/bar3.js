
import { Link } from 'react-router-dom'
import style from './bar3.module.css'
import { GoogleLogout } from 'react-google-login';
import PropTypes from 'prop-types'
import { authIsReady, firebaseConnect } from 'react-redux-firebase'
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import "./hold.css"
class Bar3 extends Component {
    logout = () => {
        this.props.firebase.logout();

    }
    login = () => {

    }
    render() {
        var kre = true;
        return (
            <div>


                <div className={style.bar}>
                    <span className={style.liquid}></span>
                    <Link to='/' className={style.baritem}>Home</Link>
                    <div id="rlmbar"  className={style.baritem}>
                    <Link to='/learn'  className={style.baritem}>Learn
                    </Link>
                    <div id='learnrlm'>
                            <Link to='/react' className={style.baritem}>React</Link >
                            <Link to='/electron' className={style.baritem}>Electron</Link >
                            <Link to='/Android_studio' className={style.baritem}>Android Studio</Link >
                            <Link to='/analytical_skills' className={style.baritem}>Analitical Skills</Link >
                            <Link to='dbms' className={style.baritem}>DBMS</Link >
                            <Link to='/java' className={style.baritem}>Java</Link >

                        </div>
                        </div>


                    <Link to='/about' className={style.baritem}>About
                    
                    </Link>
                    <Link to='/songs' className={style.baritem}> <span className={style.music123}></span>
                    
                    </Link>
                    {this.props.auth.displayName != undefined ?
                        (<React.Fragment>
                            <Link to='/add' className={style.baritem}>Add Post</Link>
                            <button className={style.baritem} onClick={this.logout}>Logout</button> </React.Fragment>) :
                        (<Link to='/login' className={style.baritem}>Login</Link>)

                    }

                </div>

                <br /><div className={style.user}>
                    {
                        this.props.auth.displayName === undefined ? (<Link to='/login' className={style.baritem}>Login to unlock all hidden features</Link>)
                            :
                            (<div><div className={style.name}>Welcome :{this.props.auth.displayName}</div><div className={style.baritemc} ><img src={this.props.auth.photoURL} width='100%' height='100%' alt="Photo?" /></div></div>)
                    }
                </div>

            </div>
        )
    }
}
Bar3.propTypes = {
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
)(Bar3)

/*
<GoogleLogout
                        clientId="68435211902-t4uuv48m5d139b3rrqmuttphj7r6bh2o.apps.googleusercontent.com"
                        buttonText="Logout"
                    >
                    </GoogleLogout>

*/