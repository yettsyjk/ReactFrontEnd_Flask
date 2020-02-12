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
                        <form>
                            <div className="input-field">
                            <input id="search" type="search" placeholder="Search for.." required></input>
                            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                            </div>
                        </form>
                    <ul className="collection with-header">
                            <li><NavLink to="/" className="left"></NavLink></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Inbound Freight</Link></li>
                            <li><NavLink to="/" className="right">Logout</NavLink></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
};


export default HeaderComponent;