import React from 'react'
import './Login.css'

import { Link } from 'react-router-dom'
import style from '../layout/bar/bar3.module.css'
export default function Songs() {
    return (<div>
        <div className='show'>
            <div className={style.bardes}>
                <Link to='/' className={style.baritemdes}>Home</Link>
                <Link to='/learn' className={style.baritemdes}>Learn</Link>
                <Link to='/about' className={style.baritemdes}>Adout </Link>
                <Link to='/login' className={style.baritemdes}>Login</Link></div><center>
                <div className='songs'>
                    <h1 style={{ color: 'blue' }}>The best of the best Songs I like!</h1>
                    <title>The best songs</title>

                </div>
                <span className='songshead'>


                    <div><iframe width="560" title='relax' height="315" src="https://www.youtube.com/embed/YKLX3QbKBg0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div><h4>The best song the relax </h4></div>
                    <div>
                        <iframe width="560" title='vibes' height="315" src="https://www.youtube.com/embed/0s_qGsVdUoo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div><h4>Fills with Positive vibes</h4></div>
                    <div>
                        <iframe width="560" title='Makes running fun' height="315" src="https://www.youtube.com/embed/dhYOPzcsbGM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div><h4>Makes running fun</h4></div>
                    <div>
                        <iframe width="560" title='Dont go crazy after lisitining to this' height="315" src="https://www.youtube.com/embed/vHOvT8v6tAQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div><h4>Don't go crazy after lisitining to this.... </h4></div>

                    <div className='song1'></div>
                    <div className='song2'></div>
                    <div className='song3'></div>
                    <div className='song4'></div>
                    <div className='shot1'></div>
                    <div className='shot2'></div>
                    <div className='shot3'></div>
                    <div className='shot4'></div>
                    <div className='shot5'></div>
                    <div className='shot6'></div>
                    <div className='shot7'></div>
                    <div className='shot8'></div>
                </span>
            </center>
        </div>
    </div>


    )
}
