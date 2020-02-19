import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
            <div className="container">
            <div className="row center-align">
                <div className="col s12">
                    <h5>Contact Us</h5>
                    <p>FTS</p>
                    <p>Highlands Ranch, CO</p>
                    <p>80126</p>
                    <p>Email Us</p>
                    <Link to="www.linkedin.com/in/yettsy-jo-knapp" target="_blank"><img src="https://img.icons8.com/doodle/2x/linkedin.png" alt="LinkedIn Icon" width="40px"></img></Link>
                </div>
            </div>
            </div>
       
    )
}

export default Contact
