import React from 'react'
import {Link} from 'react-router-dom'

function SignInForm() {
    return(
        <div className="col s12">
            <div className="card-panel">
                <form>
                    <img className="responsive-img" src="https://images.unsplash.com/photo-1579223442946-c1c147e96598?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="grid wallpaper"></img>
                    <h5>Please, login into your account</h5>
                    < div className="row black-text">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input placeholder="Email Address.." id="email" type="email"/>
                        </div>
                    </div>
                    <div className="row black-text">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lock</i>
                            <input placeholder="Password" id="password" type="password"/>
                        </div>
                    </div>
                    <div className="row center-align black-text">
                        <div className="col s12">
                            <button className="black-text btn">Sign In</button>
                        </div>
                    </div>

                </form>
            </div>
     </div>
       
    )
}

export default SignInForm
