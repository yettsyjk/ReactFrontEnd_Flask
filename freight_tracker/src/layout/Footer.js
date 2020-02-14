import React from 'react'
import { Link } from 'react-router-dom'

function FooterContainer() {
    const date = new Date()

    return (
        <footer className="page-footer blue-grey lighten-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Freight Tracker</h5>
                        <p className="white-text">Inventory at your fingertips</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">About</h5>
                        <ul>
                            <li><Link className="white-text" to="/">About Us</Link></li>
                            <li><Link className="white-text" to="/">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © {date.getFullYear()} DM, LLC
                </div>
            </div>
        </footer>
    )
}

export default FooterContainer;