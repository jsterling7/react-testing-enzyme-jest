import React from 'react';
import {shallow} from 'enzyme';
import Team from './Team';
import axios from 'axios';


jest.mock('axios', () => {
  return {
    get: jest.fn(() => {
      throw 'you should mock me'
    })
  }
})
describe('Initial component data', () => {
  describe('When data is able to be fetched', () => {
    beforeEach(() => {
      axios.get = jest.fn(() => Promise.resolve({
        data: [{name: 'Josh Sterling'}]
      }))
    })

    it('displays the current fantasy football roster', async () => {
      const team = shallow(<Team/>);
      await axios.get();

      let firstPlayer = team.find('[data-player-name]').at(0);
      expect(firstPlayer.text()).toEqual('Josh Sterling')
    })
  })
})
