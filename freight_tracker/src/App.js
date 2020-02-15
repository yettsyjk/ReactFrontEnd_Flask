import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginRegisterForm from './auth/RegisterForm'
import AccountName from './screens/AccountName'
import FreightContainer from './screens/FreightContainer'

import Home from './screens/Home'
import My404 from './screens/My404'



import FooterContainer from './layout/Footer'
import NavBar from './layout/NavBar'

import './styles/screens.css'
import FreightList from './components/FreightList'


function App() {
	return (
		<BrowserRouter>
			<div className="app-content">
				<NavBar />
				<div className="router-content">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/products" component={FreightContainer} />
						<Route exact path="/products/:id" component={FreightList} />
						<Route path="/register" component={LoginRegisterForm} />
						<Route path="/account/:slug" component={AccountName}/>
						<Route component={My404} />
					</Switch>
				</div>
				<FooterContainer />
			</div>
		</BrowserRouter>
	)
}

export default App
