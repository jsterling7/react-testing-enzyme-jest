import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage';
import Team from './Team';
import './App.css';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path={'/team'} component={Team} />
            <Route path={'/'} component={LandingPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}
