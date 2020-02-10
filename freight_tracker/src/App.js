import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';
import FreightContainer from './FreightContainer';
import FrieghtShow from './FreightShow';
import HeaderComponent from './Header';
import Home from './Home';

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
            <Route component={ My404 }/>
          </Switch>

        </main>
        
      </header>
    </div>
    )
  }
};

export default App;
