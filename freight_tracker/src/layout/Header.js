import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import SearchBar from '../components/SearchBar'

function HeaderComponent() {
    return (
        <nav className="blue-grey lighten-3">
            <div className="container">
                <div className="nav-wrapper">
                    <ul className="left hide-on-med-and-down">
                        <li><Link className="black-text" to="/">Home</Link></li>
                        <li><Link className="black-text" to="/products">Inbound Freight</Link></li>
                    </ul>
                    <Link to="/" className="brand-logo center">Freight Tracker</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink className="right black-text" to="/">Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent
