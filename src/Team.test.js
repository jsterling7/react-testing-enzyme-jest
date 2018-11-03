import React from "react";
import Team from './Team'
import {shallow} from 'enzyme'
import axios from 'axios'

jest.mock('axios', () => {
    return {
        get: () => {
            throw "You should mock me"
        }
    }
})

describe("Initial component data", () => {
    describe("When data is able to be fetched", () => {
        beforeEach(() => {
            axios.get = () => Promise.resolve({
                data: [{name: 'Bart Simpson'}]
            })
        })

        it('displays the current fantasy football roster', async () => {
            const team = shallow(<Team/>)

            await axios.get()

            let firstPlayer = team.find('[data-player-name]').at(0);

            expect(firstPlayer.text()).toEqual("Bart Simpson")
        })
    })
})