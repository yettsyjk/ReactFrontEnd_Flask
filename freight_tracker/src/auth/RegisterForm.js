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

    login = async (loginInfo)=> {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/login`, {
            method: 'POST',
            credentials: 'include'
            body: JSON.stringify(loginInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedLoginResponse = await response.json()

        if(parsedLoginResponse.status.code === 200){
            this.props.loggedStatus(parsedLoginResponse.data.email)
        } else{
            console.log('Login Failed:', parsedLoginResponse);
        }
    }

    register = async (registerInfo) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/register`,{
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(registerInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const parsedRegisterResponse = await response.json();
        console.log(parsedRegisterResponse)

        if(parsedRegisterResponse.status.code === 200){
            this.props.loggedStatus(parsedRegisterResponse.data.email)
            this.props.history.push('/products');
        } else {
            console.log('Register Failed:', parsedRegisterResponse);
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault()
        this.userRegister()
    }

    switchForm = () => {
        if(this.state.action === "login") {
            this.setState({
                action: 'register'
            })
        }else{
            this.setState({
                action: 'login'
            })
        }
    }
    loginRegister = () => {
        if (this.state.action === "login") {
            this.login({
                email: this.state.email,
                password: this.state.password
            })
        } else {
            this.register({
                email: this.state.email,
                password: this.state.password
            })
        }
    }
    render() {
    return(
        <div className="container">
        <div  className="z-depth-3 y-depth-3 x-depth-3 grey green-text lighten-4 row" >
        <div className="section"></div>
<div className="section"></div>
    
      <div className="section"><i className="mdi-alert-error red-text"></i></div>
      
  
            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type="text" name="username" id="email" required />
                <label for="email">Username</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col m12">
                <input className="validate" type="password" name="password" id="password" required />
                <label for="password">Password</label>
              </div>
              <label>
              <a><b>Register Free Account</b></a>
              </label>
            </div>
            <br/>
            <center>
              <div className="row">
                <button type="submit" name="btn_login" className="col  s6 btn btn-small white black-text  waves-effect z-depth-1 y-depth-1">Login</button>
              </div>
            </center>
     
        </div>
       </div>
        )
    }
}

export default RegisterForm