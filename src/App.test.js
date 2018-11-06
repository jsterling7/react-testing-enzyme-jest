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

describe("routing", () => {
    it("should route to the landin' page", () => {
        const app = shallow(<App/>)

        const routes = app.find(Route)

        expect(routes.at(1).exists()).toEqual(true)
        expect(routes.at(1).props().path).toEqual("/")
        expect(routes.at(1).props().component).toEqual(TeamSearch)

        expect(routes.at(0).exists()).toEqual(true)
        expect(routes.at(0).props().path).toEqual("/banana")
        expect(routes.at(0).props().component).toEqual(Banana)


    })
})