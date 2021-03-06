import React, { Component } from 'react'

class LoginRegisterForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            action: "register"
        }
    }
    //this fetch call is for heroku app
    login = async (loginInfo) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/login`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(loginInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const parsedLoginResponse = await response.json()

        if(parsedLoginResponse.status.code === 200){
            // this.props.loggedStatus(parsedLoginResponse.data.email)
            this.props.history.push('/products');
        } else{
            console.log('Login Failed:', parsedLoginResponse);
        }
    }

    register = async (registerInfo) => {
        console.log(registerInfo) 
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
            // this.props.loggedStatus(parsedRegisterResponse.data.email)
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
        console.log(this.state.action)
        if(this.state.action === "login") {
            this.setState({
                action: 'register'
            },  ()=>{
                console.log(this.state.action)
            })
        } else {
            this.setState({
                action: 'login'
            }, ()=>{
                console.log(this.state.action)
            })
        }
        
    }
    
    loginRegister = (e) => {
        e.preventDefault()
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
        <div className="col s12 m8 l4 offset-m2 offset-l4">
            <div className="card-small center-align">
                <form className="col s12" onSubmit={this.loginRegister}>
                    <div className="row">
                    <img className="responsive-img" src="https://midlinklogistics.com/wp-content/uploads/sites/61/2015/02/map.png" alt="grid wallpaper" ></img>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input placeholder="Email Address" id="email" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lock</i>
                            <input placeholder="Password" id="password" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-field">
                        <div className="col s12">
                            <button type="submit" className="black-text btn">
                            {this.state.action === "login" ? "Log in" : "Register"}
                            </button>
                        </div>
                    <div className="row">
                        <div className="message">
                            {this.state.action === "register" ?
                            <small>Already have an account? <br/>Log in <span onClick={this.switchForm}>here</span>.</small>
                        :
                        <small>Need and account? <br/>Register free account <span onClick={this.switchForm}>here</span>!</small>}
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
        )
    }
}

export default LoginRegisterForm