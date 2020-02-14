import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FooterContainer extends Component {

    render() {
        const date = new Date()

        return (
            <footer className="page-footer blue-grey lighten-3">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <h5 className="black-text">Freight Tracker</h5>
                            <p className="black-text text-lighten-4">Inventory at your fingertips</p>
                        </div>
                        <div className="col s6 m3">
                            <h5 className="black-text">About</h5>
                            <ul>
                                <li><Link className="black-text text-lighten-3" to="/">About Us</Link></li>
                                <li><Link className="black-text text-lighten-3" to="/">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container black-text">
                        {date.getFullYear()} DM, LLC
                    </div>
                </div>
            </footer>
            
        );
    }
}

export default FooterContainer;