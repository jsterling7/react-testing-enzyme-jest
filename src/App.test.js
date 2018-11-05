import React from 'react'
import App from './App'
import {shallow} from "enzyme";

describe('sanity testing the test suite', () => {
    it('should work', () => {
        expect(1).toEqual(1)
    })
})

describe('List of additional players', () => {

    it('displays a list of players', () => {
        const component = shallow(<App/>)

        let playerList = component
            .find('ul > li');

        let firstPlayer = playerList.at(0);

        expect(firstPlayer.exists()).toBeTruthy()

        expect(firstPlayer.text()).toEqual("Usain Bolt")

        let secondPlayer = playerList.at(1);

        expect(secondPlayer.text()).toEqual("Bart Simpson")

        expect(playerList.at(0).props().className).toEqual("make-bold")
    })


})