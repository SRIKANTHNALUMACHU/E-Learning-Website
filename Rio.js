import React from 'react'
import Home from './Home'
import Login from './login/Login'
import Null from './post/Null'
import Chat from './Learn/Chat'
import Songs from './login/Songs'
import { Route, Switch } from 'react-router-dom'
export default function Rio() {

    return (
        <div>
            <Switch>

                <Route exact path='/login' component={Login} />
                <Route exact path='/Null' component={Null} />
                <Route exact path='/chat' component={Chat} />
                <Route exact path="/songs" component={Songs} />
                <Route path='/' component={Home} />

            </Switch>
        </div>
    )
}
