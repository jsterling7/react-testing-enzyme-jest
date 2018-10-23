import React from 'react'
import App from './App'
import {shallow} from "enzyme";

describe('sanity testing the test suite', () => {
    it('works!', () => {
        expect(1).toEqual(1)
    })
})

describe("Landing Page", () => {
    it("greets the user", () => {
        const component = shallow(<App/>)

        const welcomeElement = component.find('h1');

        expect(welcomeElement.exists()).toEqual(true)
        expect(welcomeElement.text()).toEqual('Welcome to the Fantasy Football App!')
    })

    it('lets the user know why the site exists', () => {
        const component = shallow(<App/>)

        const welcomeElement = component.find('h3');

        expect(welcomeElement.exists()).toEqual(true)
        expect(welcomeElement.text()).toEqual('The central source for all drafting, roster moves, and the latest player information.')
    })
})