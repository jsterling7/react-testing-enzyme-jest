import React from "react";
import {App} from './App'
import {shallow} from 'enzyme'
import {Route} from "react-router-dom";
import LandingPage from "./LandingPage";

describe('App router functionality', () => {
    it('renders the laning page by default', () => {
        const app = shallow(<App/>)
        expect(app.exists()).toBeTruthy()
    })

    it('routes to the landing component by default', () =>  {
        const app = shallow(<App/>)

        const defaultRoute = app.find(Route)

        expect(defaultRoute.props().path).toEqual("/")
        expect(defaultRoute.props().component).toEqual(LandingPage)
    })
})