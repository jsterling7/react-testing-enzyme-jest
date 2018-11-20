import React from 'react'
import {shallow} from 'enzyme'

import App from './App'
import constants from './constants'

describe("Landing page", () => {
    let app;

    beforeEach(() => {
        app = shallow(<App />)
    })

    describe("the title", () => {
        it("shows a greeting to the user", () => {
            const greeting = app.find('#header[data-greeting]')
            expect(greeting.exists()).toBeTruthy()
            expect(greeting.text()).toBe(constants.WELCOME_TEXT)
        })
    
        it("shows a description of the site's purpose", () => {
            const blurb = app.find('[data-blurb]')
            expect(blurb.exists()).toBeTruthy()
            expect(blurb.text()).toBe(constants.BLURB_TEXT)
        })
    })

    describe("a list of players", () => {
        const draftablePlayers = [
            'My Buddy',
            'Pro Buddy',
            'Rookie Buddy'
        ]

        it("exists", () => {
            const playersList = app.find('.card ul')
            expect(playersList.exists()).toBeTruthy()
        })

        it("has names that are in the list of available players", () => {
            const players = app.find('li[data-player]')
            expect(players).toHaveLength(draftablePlayers.length)
            expect(draftablePlayers)
                .toMatchObject(players.map(player => player.text()))
            // players.forEach(player => expect(draftablePlayers).toContain(player.text()))
        })

        it("has Pro players emphasized", () => {
            const proPlayer = app
                .find('[data-player]')
                .findWhere(el => el.props().isPro)
            expect(proPlayer).toHaveLength(1)
            expect(proPlayer.props().styles).toMatchObject({
                fontWeight: expect.any(String)
            })
        })
    })
})
