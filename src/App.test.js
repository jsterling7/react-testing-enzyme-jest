import React from 'react'
import App from './App'
import {shallow} from "enzyme";

describe('sanity testing the test suite', () => {
    it('works!', () => {
        expect(1).toEqual(1)
    })
})

describe("Landing Page static content", () => {
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

describe("Searching for teams", () => {
    describe("when the team is found", () => {
        it("displays additional information about the teams", () => {
            const component = shallow(<App/>)

            const event = {
                target: {
                    value: "Birmingham Bolts"
                }
            }

            component
                .find("[data-team-search-input]")
                .simulate("change", event)

            component
                .find("[data-team-search-submit]")
                .simulate("click", { preventDefault: () => {}})

            const searchResults = component
                .find('[data-team-search-results]')
                .text();

            expect(searchResults).toEqual("Birmingham Bolts - Birmingham, Alabama - Colors: Purple, Yellow, Silver")

        })
    })
})