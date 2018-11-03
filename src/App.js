import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./LandingPage";
import Team from "./Team";


export default class App extends Component {

    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path={"/team"} component={Team}/>
                        <Route path={"/"} component={LandingPage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}