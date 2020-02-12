import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const date = new Date()

class FooterContainer extends Component {

    render () {
        return (
            <footer className="page-footer black-text-2">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="black-text text-lighten-3">Freight Tracker  
                                <div className="black-text" disabled>
                                    c {date.getFullYear()} DM, LLC
                                </div>
                                <div className="black-text" disabled>
                                    <label disabled label="Author: Yettsy J Knapp"/>
                                </div>
                                <div className="black-text" disabled>
                                    <label disabled label="Date:Feb 2020 "/> 
                                </div>
                                <div className="black-text">
                                    <h5 className="black-text">Links</h5>
                                    <ul>
                                    <li><Link to="/"/> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterContainer;