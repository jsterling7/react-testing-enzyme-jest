import React from 'react'
import App from './App'
import {mount, shallow} from "enzyme";
import {Route} from "react-router-dom";
import TeamSearch from "./TeamSearch";
import Banana from "./Banana";

describe('sanity testing the test suite', () => {
    it('works!', () => {
        expect(1).toEqual(1)
    })
})

describe("Landing Page", () => {
    let component

    beforeEach(() => {
        component = shallow(<App/>)
    })

    it("greets the user", () => {
        const welcomeElement = component.find('h1');

        expect(welcomeElement.exists()).toEqual(true)
        expect(welcomeElement.text()).toEqual('Welcome to the Fantasy Football App!')
    })

    it('lets the user know why the site exists', () => {
        const welcomeElement = component.find('h3');

        expect(welcomeElement.exists()).toEqual(true)
        expect(welcomeElement.text()).toEqual('The central source for all drafting, roster moves, and the latest player information.')
    })
})

describe("routing", () => {
    it("should route to the landin' page", () => {
        const app = mount(<App/>)

        console.log(app.debug())
        const routes = app.find(Route)

        expect(routes.at(1).exists()).toEqual(true)
        expect(routes.at(1).props().path).toEqual("/")
        expect(routes.at(1).props().component).toEqual(TeamSearch)

        expect(routes.at(0).exists()).toEqual(true)
        expect(routes.at(0).props().path).toEqual("/banana")
        expect(routes.at(0).props().component).toEqual(Banana)


    })
})