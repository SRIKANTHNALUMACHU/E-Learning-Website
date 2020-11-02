import React from 'react'
import { Link } from 'react-router-dom'
import style from './bar2.module.css'
export default function Bar2() {
    return (

        <div className={style.bar}>
            <ak classname={style.liquid}></ak>
            <Link to='./' className={style.baritems}>Home</Link>

            <Link to='./' className={style.baritems}>Learn</Link>

            <Link to='./add' className={style.baritems}>Add Post</Link>

            <Link to='./add' className={style.baritems}>Adout</Link>

        </div>
    )
}
