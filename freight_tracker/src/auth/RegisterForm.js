import React, { Component } from 'react'

class RegisterForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            action: 'login'
        }
    }

    register = async(registerInfo) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/register`,{
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(registerInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedRegisterResponse = await response.json();

        if(parsedRegisterResponse.status.code === 200){
            this.props.loggedStatus(parsedRegisterResponse.data.email)
            this.props.history.push('/products');
        } else {
            console.log('Register Failed:', parsedRegisterResponse);
        }
    }
    handleRegisterChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleRegisterSubmit = (e)=> {
        e.preventDefault()
        this.userRegister()
    }
    render() {
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
}

export default RegisterForm