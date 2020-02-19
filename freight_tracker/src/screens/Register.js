import React from 'react'

import LoginRegisterForm from '../auth/LoginRegisterForm'

function Register(props) {
    return (
        <div>
            <LoginRegisterForm {...props}/>
        </div>
    )
}
export default Register