import React, { Component } from 'react'
import styles from './disp.css';

export default class Display extends Component {
    render() {
        const post = 0;
        return (
            <div className="card">
                {post === 0 ? (
                    <div className="card">
                        <div className="row justify-content-around">
                            <div style={{ height: '10pc' }} className=" border rounded border-primary col-3 card">vijay</div>
                            <div className="border border-success col-3 rounded card">kanth</div>
                            <div className="border border-info col-3 rounded card">reddy</div>
                            <div className="border border-secondsry rounded col-2 card">11</div>
                        </div></div>
                ) : null}
                <div style={{ height: '80pc' }} className="card">

                </div>
            </div>
        )
    }
}
