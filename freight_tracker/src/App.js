import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


import AccountName from './screens/AccountName'
import FooterContainer from './layout/Footer'
import FreightContainer from './screens/FreightContainer'
import FrieghtShow from './screens/FreightShow'
import HeaderComponent from './layout/Header'
import Home from './screens/Home'
import Signin from './screens/Signin'
import Register from './screens/Register'

const My404 = () => {
  return (
    <div>
      <img src="https://img.icons8.com/color/2x/lost-and-found.png" alt="question mark umbrella lost page" height="200" width="200"></img>
      <p>404 Error, I'm Lost</p></div>
  )
};

class App extends Component {
  constructor() {
    super()
  
  }
  render () {
  return (
    <div className="App">
      <header className="App-header">
        
        <main>
          <HeaderComponent/>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props}/> } />
            <Route exact path="/products" render={(props) => <FreightContainer {...props}/> } />
            <Route exact path="/products/:productName" render={(props) => <FrieghtShow {...props}/> }/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/accountName" component={AccountName}/>
            <Route exact path="/register" component={Register}/>
            <Route component={ My404 }/>
          </Switch>
        </main>
        
      </header>
      <FooterContainer/>
    </div>
    )
  }
};

export default App;
