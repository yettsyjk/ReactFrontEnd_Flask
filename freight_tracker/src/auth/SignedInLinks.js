import React from 'react'
import { Link } from 'react-router-dom'

function SignedInLinks (props){
    const {handleLogOut} = props
   
    return(
        <ul className="right hide-on-med-and-down">
            <li><Link className="black-text btn" onClick={handleLogOut} to="/">Log Out</Link></li>

            <li><Link className="btn" to="/products"><i className="black-text material-icons">person</i></Link></li>
        </ul>
    )
}

export default SignedInLinks