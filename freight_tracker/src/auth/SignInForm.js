import React from 'react'


function SignInForm () {
    return (
        <div className="col s12">
            <div className="card-panel">
                <form>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Email Address" id="email" type="email"/>
                            <button className="btn">Sign In</button>

                    </div>

                    </div>
                </form>

            </div>

        </div>
    )
}

export default SignInForm