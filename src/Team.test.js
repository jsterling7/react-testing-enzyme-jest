import {shallow} from "enzyme";
import React from "react";
import Team from "./Team";
import axios from 'axios'

jest.mock('axios', () => ({
    get: () => {
        throw 'YOU SHOULD MOCK ME'
    }
}))

describe("When visiting the teams page", () => {
    describe("When able to successfully get player data", () => {
        beforeEach(() => {
            const dataToReturn = {
                data: [
                    {
                        name: 'Usain Bolt',
                        team : 'Birmingham Bolts'
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

            let firstPlayer = players.at(0);

            expect(firstPlayer.text()).toEqual("Usain Bolt - Birmingham Bolts")

        })
    })
})