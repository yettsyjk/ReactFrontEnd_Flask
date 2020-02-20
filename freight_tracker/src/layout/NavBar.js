import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

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

    logoutHandler = () => {
        this.setState({
            logout: true
        })
        // console.log(this.logoutHandler)
    }

    render() {
        const { auth } = this.state
        console.log(auth)

        const authLinks = auth ? <SignedInLinks handleLogOut={this.handleLogOut} /> : <SignedOutLinks handleLogIn={this.handleLogIn}/>
    return (
        <nav className="blue-grey lighten-3">
            <div className="container">
                <div className="nav-wrapper">
                    <ul className="left hide-on-med-and-down">
                        <li><Link className="black-text" to="/" >Home</Link></li>
                        <li><Link className="black-text" to="/products">Inbound Freight</Link></li>
                    </ul>
                    <Link to="/" className="brand-logo center"><img src="https://img.icons8.com/dusk/2x/delivery.png" alt="logistic" height="50px" width="50px"></img>InFreight</Link>
                    <ul className="right hide-on-med-and-down" onClick={this.handleLogOut}>
                        {authLinks}
                    </ul>
                    <Link to="/" className="right hand-on-med-and-down" onClick={this.logoutHandler}>Logout</Link>
                    { this.state.loggedIn ?
                    <Menu.Item position="right">{this.state.loggedInUserEmail}</Menu.Item>:
                    null
                    }
                </div>
            </div>
        </nav>
        )
    }
}

export default NavBar
