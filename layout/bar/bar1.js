import React from 'react'

import { Link } from 'react-router-dom'
export default function Bar1() {
    const sear = ''
    return (
        <div className="card">
            <div className="card">
                <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                    <a class="navbar-brand" href="#">Rio AI</a>
                    <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Learn</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Statistics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <Link to='./add' className="nav-link">Add Post</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <nav class="navbar navbar-light bg-light justify-content-center">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" name='name' value={sear} type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>

        </div>
    )
}
