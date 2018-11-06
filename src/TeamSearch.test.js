import React from 'react'
import {shallow} from 'enzyme'
import TeamSearch from "./TeamSearch";

describe("Searching for teams", () => {
    describe("when the team is found", () => {
        it("displays additional information about the teams", () => {
            const component = shallow(<TeamSearch/>)

            const event = {
                target: {
                    value: "Birmingham Bolts"
                }
            }

            component
                .find("[data-team-search-input]")
                .simulate("change", event)

            let preventDefaultSpy = jest.fn();

            component
                .find("form")
                .simulate("submit", {preventDefault: preventDefaultSpy})

            const searchResults = component
                .find('[data-team-search-results]')
                .text();

            expect(searchResults).toEqual("Birmingham Bolts - Birmingham, Alabama - Colors: Purple, Yellow, Silver")
            expect(preventDefaultSpy).toHaveBeenCalled()
        })
    })

    describe("when the team is found", () => {
        it("displays additional information about the teams", () => {
            const component = shallow(<TeamSearch/>)

            const event = {
                target: {
                    value: "Birmingham Boltzzzz"
                }
            }

            component
                .find("[data-team-search-input]")
                .simulate("change", event)

            let preventDefaultSpy = jest.fn();

            component
                .find("form")
                .simulate("submit", {preventDefault: preventDefaultSpy})

            const searchResults = component
                .find('[data-team-search-results]')
                .text();

            expect(searchResults).toEqual("No Results Found")
            expect(preventDefaultSpy).toHaveBeenCalled()
        })
    })
})