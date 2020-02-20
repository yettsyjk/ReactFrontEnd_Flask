import React from 'react'
import { Link } from 'react-router-dom'

function FooterContainer() {
    const date = new Date()

    return (
        <footer className="page-footer blue-grey lighten-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="black-text"><Link className="black-text" to="/">Inbound Freight</Link></h5>
                        <p className="black-text">Inventory at your fingertips</p>
                        <p className="black-text">Developed for Educational Purposes Only.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="black-text"><Link className="black-text" to="/about">About</Link></h5>
                        <ul>
                            <li><Link className="black-text fa fa-github" to="/about">About Us</Link></li>
                            <li><Link className="black-text" to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container black-text">
                    © {date.getFullYear()} DM, LLC
                </div>
            </div>
        </footer>
    )
}

export default FooterContainer;