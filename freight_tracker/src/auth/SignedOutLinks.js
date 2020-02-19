import React from 'react'
import { Link } from 'react-router-dom'

function SignedOutLinks(props) {
    
    return (
        <ul className="right hide-on-med-and-down">
            <li><Link className="black-text btn" to="/register">Sign In / Register</Link></li>
        </ul>
    )
}

export default SignedOutLinks
