import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SignedInLinks from '../auth/SignedInLinks'
import SignedOutLinks from '../auth/SignedOutLinks'


class NavBar extends Component {
    state = { 
        auth: false 
    }

    handleLogIn = () => {
        console.log('logged in')
        this.setState({
            auth: true
        })
    }
    
    handleLogOut = () => {
        console.log('logged out')
        this.setState({
            auth: false
        })
    }

    render() {
        const { auth }= this.state

        const authLinks = auth ? <SignedInLinks handleLogOut={this.handleLogOut} /> : <SignedOutLinks handleLogIn={this.handleLogIn}/>
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
                        {authLinks}
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}

export default NavBar
