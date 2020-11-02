import React from 'react'

import { UserIsAuthenticated, UserIsNotAuthenticated } from '../auth/auth'
import { Link, Route, Switch } from 'react-router-dom'

import Notfound from '../data/Notfound'
import Learn from '../layout/bar/Learn'
import Frame1 from '../post/Frame1'
import About from '../data/About'
import Post from '../data/Post';
import Homepost from '../data/Homepost'
import Edit from '../post/Edit'
import Reactlek from '../Learn/Reactle'
import Electron from '../Learn/Electron'
import Java from '../Learn/Java'
import Dbms from '../Learn/Dbms'
import Studio from '../Learn/Studio'
import Anskill from '../Learn/Anskill'
export default function Allroutes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Homepost} />
                <Route path='/about' component={About} />
                <Route exact path='/learn' component={Learn} />
                <Route exact path='/react' component={Reactlek} />
                <Route exact path='/electron' component={Electron} />
                <Route exact path='/java' component={Java} />
                <Route exact path='/dbms' component={Dbms} />
                <Route exact path='/analytical_skills' component={Anskill} />
                <Route exact path='/Android_studio' component={Studio} />
                <Route path='/add' component={UserIsAuthenticated(Frame1)} />
                <Route path='/aboutme' component={Post} />
                <Route path='/Edit/:id' component={UserIsAuthenticated(Edit)} />
                <Route component={Notfound} />

            </Switch>
        </div>
    )
}
