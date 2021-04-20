import './styles/App.css';
import React from 'react'
// import Routes from './Route'
import LandingPage from './components/landing-page'
import Home from './components/Home'
import { AddProducts } from './components/AddProducts'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/home' component={Home} />
            <Route path='/addproducts' component={AddProducts} />
          </Switch>
        </div>
      </Router>
    );
  }
}

