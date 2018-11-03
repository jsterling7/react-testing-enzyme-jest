import React from "react";
import {App} from './App'
import {shallow} from 'enzyme'

describe('App router functionality', () => {
    it('renders the laning page by default', () => {
        const app = shallow(<App/>)
        expect(app.exists()).toBeTruthy()
    })
})