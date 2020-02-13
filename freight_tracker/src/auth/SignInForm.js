import React from 'react'


function SignInForm () {
    return (
        <div className="col s12">
            <div className="card-panel">
                <form>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input placeholder="Email Address" id="email" type="email"/>
                            <button className="btn">Sign In</button>

                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lock</i>
                            <input placeholder="Password" id="password" type="password"/>
                            <button className="btn">Sign In</button>

                    </div>
                    </div>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default SignInForm