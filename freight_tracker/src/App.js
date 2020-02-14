import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AccountName from './screens/AccountName'
import EditFreight from './screens/EditFreight'
import FreightContainer from './screens/FreightContainer'
import FrieghtShow from './components/FreightShow'
import Home from './screens/Home'
import My404 from './screens/My404'
import Register from './screens/Register'


import FooterContainer from './layout/Footer'
import HeaderComponent from './layout/Header'

import './styles/screens.css'

function App() {
	return (
		<BrowserRouter>
			<div className="app-content">
				<HeaderComponent />
				<div className="router-content">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/products" component={FreightContainer} />
						<Route exact path="/products/:productName" component={FrieghtShow} />
						<Route exact path="/products/:productName/edit" component={EditFreight} />
						<Route path="/accountName" component={AccountName} />
						<Route path="/register" component={Register} />
						<Route component={My404} />
					</Switch>
				</div>
				<FooterContainer />
			</div>
		</BrowserRouter>
	)
}

export default App
