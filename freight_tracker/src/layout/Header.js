import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'


class HeaderComponent extends Component {
    //auth in state
    //desconstruct auth
    render() {
        return(
            
            <div className="navbar-fixed">
                <nav>                
                    <div className="nav-wrapper">
                    <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/" className="left hide-on-med-and-down"></NavLink></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Inbound Freight</Link></li>
                        <li><NavLink to="/" className="right hide-on-med-and-down">Logout</NavLink></li>
                        </ul>
                        </div>
                </nav>
            </div>
        )
    }
};


export default HeaderComponent;