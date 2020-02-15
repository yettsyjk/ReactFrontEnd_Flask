import React from 'react'
import { Link } from 'react-router-dom'

function SignedOutLinks(props) {
    const {handleLogIn} = props
    return (
        <ul className="right hide-on-med-and-down">
            <li><Link className="black-text btn" onClick={handleLogIn} to="/signin">Sign In</Link></li>
            <li><Link className="black-text btn" to="/register">Register Free Account</Link></li>
        </ul>
    )
}

export default SignedOutLinks
