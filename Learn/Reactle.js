import React, { Component } from 'react'
import './learncss.css'


import { Link } from 'react-router-dom'
export default class Reactle extends Component {
    render() {
        var { value } = this.props.location.state;
        var ika = value[0].mi.filter(i => i.sub == 'react');
        return (
            <React.Fragment>
                <div className='reactleimg'>
                    <span className='reactilehead'>Learn React Advanced Level</span>

                </div>
                <div className='flashdiv'>
                    <div className='lposts'>Latest Posts</div>
                    {ika.map(i =>
                        (<Link key={i.id} to={{
                            pathname: `/aboutme/${i.id}`
                        }} >
                            <div className='flashcss' >
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
                </div>
            </React.Fragment>
        )
    }
}