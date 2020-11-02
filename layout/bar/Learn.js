import React, { Component } from 'react'
import style from './bar3.module.css'
import { Link } from 'react-router-dom'
import img1 from './analy3.jpeg'
import img2 from './android2.jpeg'
import img3 from './android1.jpeg';
import img4 from './java1.jpeg'
import img5 from './dbms1.jpeg'
import img6 from './python3.jpeg'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Loading from '../../data/Loading'
class Learn extends Component {
    render() {
        if (this.props.aka) {
            return (
                <React.Fragment>
                    <div className='bar345'>
                        Hi learner pick Your fav from the List below!
            <br />
                        <Link to={{ pathname: `/react`, state: { value: this.props.aka } }} className='baritem345'>React</Link >
                        <Link to='/electron' className='baritem345'>Electron</Link >
                        <Link to='/Android_studio' className='baritem345'>Android Studio</Link >
                        <Link to='/analytical_skills' className='baritem345'>Analitical Skills</Link >
                        <Link to='dbms' className='baritem345'>DBMS</Link >
                        <Link to='/java' className='baritem345'>Java</Link >

                    </div>
                    <div className='vijay7'>
                        <marquee behavior='alternate'
                            direction="left">
                            <img className='vijay77' src={img1} alt="img1" />
                            <img className='vijay77' src={img2} alt="img2" />
                            <img className='vijay77' src={img3} alt="img3" />
                            <img className='vijay77' src={img4} alt="img4" />
                            <img className='vijay77' src={img5} alt="img5" />
                            <img className='vijay77' src={img6} alt="img6" />
                        </marquee>
                    </div></React.Fragment>
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
)(Learn)

