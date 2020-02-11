import React, { Component } from 'react'
import { Link, Input } from 'react-router-dom'

const date = new Date()

class FooterContainer extends Component {

    render () {
        return (
            <footer className="page-footer black-text-2">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="black-text text-lighten-3">Footer Content 
                                <div disabled>
                                    c {date.getFullYear()} Darkenship Media, LLC
                                </div>
                                <div disabled>
                                    <input disabled label="Author: "/> 
                                </div>
                                <div disabled>
                                    <input disabled label="Date: "/> 
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