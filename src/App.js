import React, {Component} from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TeamSearch from "./TeamSearch";
import Banana from "./Banana";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/banana" component={Banana}/>
                        <Route exact path="/" component={TeamSearch}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
