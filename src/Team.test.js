import {shallow} from "enzyme";
import React from "react";
import Team from "./Team";
import axios from 'axios'

jest.mock('axios', () => ({
    get: () => {
        throw 'YOU SHOULD IMPLEMENT A REAL MOCK'
    }
}))

describe("When visiting the teams page", () => {
    describe("When able to fetch player data", () => {
        beforeEach(() => {
            const dataToReturn = {
                data: [
                    {
                        name: 'Usain Bolt',
                        team: 'Birmingham Bolts'
                    }
                ]
            };

            axios.get = jest.fn(() => {
                return Promise.resolve(dataToReturn)
            })
        })

        it("displays each individual player on the team", async () => {
            const component = shallow(<Team/>)

            await axios.get()

            const players = component.find('[data-team-players]')
            const errorComponent = component.find('[data-error-message]');

            let firstPlayer = players.at(0);

            expect(firstPlayer.text()).toEqual("Usain Bolt - Birmingham Bolts")

            expect(errorComponent.text()).not.toEqual('Failed to load data!')

        })
    })

    describe("When unable to fetch any player data", () => {
        it("Should display a warning message", async () => {
            let expectedErrorMessage = "Failed to load data!";

            axios.get = jest.fn(() => {
                return Promise.reject({data: expectedErrorMessage})
            })

            const component = shallow(<Team/>)

            try {
                await axios.get()
            } catch (e) {

            }

            const errorComponent = component.find('[data-error-message]')

            expect(errorComponent.text()).toEqual(expectedErrorMessage)
        })
    })
})