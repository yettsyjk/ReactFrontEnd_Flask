import React, { Component } from 'react'

class LoginRegisterForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            action: 'login'
        }
    }

    login = async (loginInfo) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/login`, {
            method: 'POST',
            credentials: 'include',
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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/register`, {
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
        this.loginRegister()
    }

    switchForm = () => {
        if(this.state.action === "login") {
            this.setState({
                action: 'register'
            })
        } else {
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
        <div></div>
        )
    }
}

export default LoginRegisterForm