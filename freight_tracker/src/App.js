import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FreightContainer from './components/FreightContainer'

import Home from './screens/Home'
import My404 from './screens/My404'
import Register from './screens/Register'


import About from './layout/About'
import Contact from './layout/Contact'
import FooterContainer from './layout/Footer'
import NavBar from './layout/NavBar'


import './styles/screens.css'


class App extends Component {
	constructor() {
		super()

		this.state = {
			loggedIn: true,
			loggedInUserEmail: null
		}
	}

	handleLoggedInStatus = (loggedInUserEmail) => {
		this.setState({
			loggedIn: true,
			loggedInUserEmail: loggedInUserEmail
		})
	}

	logout = async() => {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/logout`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const parsedLogoutResponse = await response.json();

		if(parsedLogoutResponse.status.code === 200){
			this.setState({
				loggedIn: false,
				loggedInUserEmail: ''
			})
		} else {
			console.log('Register Failed: ', parsedLogoutResponse);
		}
	}

	render() {
	return (
		<BrowserRouter>
			<div className="app-content">
	<NavBar loggedIn={this.state.loggedIn} loggedInUserEmail={this.state.loggedInUserEmail} logout={this.logout} />
				<div className="router-content">
					<Switch>
						<Route exact path="/" component={Home} loggedIn={this.state.loggedIn} loggedStatus={this.handleLoggedInStatus}/>
						<Route exact path="/products" component={FreightContainer}  loggedIn={this.state.loggedIn} loggedStatus={this.handleLoggedInStatus}/>
						<Route path="/register" component={Register} />
						<Route exact path="/about" component={About}/>
						<Route exact path="/contact" component={Contact}/>
						<Route component={My404} />
					</Switch>
				</div>
				<FooterContainer />
			</div>
		</BrowserRouter>
		)
	}
}

export default App
