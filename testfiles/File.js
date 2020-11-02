import React from 'react'

import { Route, Link } from 'react-router-dom'

import Users from './users'
import Contact from './contact'

function File() {
    return (

        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <hr />

            <Route exact path="/users" component={Users} />
            <Route path="/contact" component={Contact} />


        </div>

    )
}
export default File;