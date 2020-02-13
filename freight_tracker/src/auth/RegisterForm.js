import React from 'react'

function RegisterForm () {
    return(
        <div className="col s12">
            <div className="card-panel">
                <form>
                    <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">email</i>
                    <input placeholder="Email Address" id="email" type="email"/>
                    </div>
                    </div>
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">lock</i>
                    <input placeholder="Password" id="password" type="password" required/>
                    </div>
                </div>
                <div className="two center-align">
                    <div className="col s12">
                        <button className="black-text btn">Register Free Account</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default RegisterForm