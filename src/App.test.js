import React from 'react'
import App from './App'
import {shallow} from 'enzyme';

describe('Landing Page', () => {

    let component

    beforeEach(() => {
      component = shallow(<App/>);
    })


    it('greets the user', () => {
        let welcomeElement = component.find('h1');
        expect(welcomeElement.exists()).toEqual(true);
        expect(welcomeElement.text()).toEqual('Welcome to the Fantasy Football App!')
    })


    it('describes the purpose of the website to the user', () => {
      let descriptionElement = component.find('h3');
      expect(descriptionElement.exists()).toEqual(true);
      expect(descriptionElement.text()).toEqual('The central source for all drafting, roster moves, and the latest player information');
    })


    it('has a list of undrafted players', () => {
      let playerListHeader = component.find('[data-undrafted-players-header]');
      let playerList = component.find('ul');
      expect(playerListHeader.exists()).toEqual(true);
      expect(playerListHeader.text()).toEqual('Undrafted Players');
      expect(playerList.exists()).toEqual(true);
    })


    it('has a box around the undrafted players list', () => {
      let playerListBox = component.find('[data-player-list-box]');
      expect(playerListBox.exists()).toEqual(true);
      //two different ways to check for the correct class
      expect(playerListBox.props().className).toEqual('box');
      expect(playerListBox.hasClass('box')).toEqual(true);
    })


    it('has a list element for the first three players', () => {
      let player1 = component.find('[data-player1]');
      let player2 = component.find('[data-player2]');
      let player3 = component.find('[data-player3]');
      expect(player1.exists()).toEqual(true);
      expect(player2.exists()).toEqual(true);
      expect(player3.exists()).toEqual(true);
      expect(player1.text()).toEqual('Miguel Torrey');
      expect(player2.text()).toEqual('Gregory Ander');
      expect(player3.text()).toEqual('Randal Timber');
    })

})
describe('Searching for teams', () => {

  let component
  let searchInput
  let searchButton

  beforeEach(() => {
    component = shallow(<App/>);
    searchInput = component.find('[data-team-search-input]');
    searchButton = component.find('[data-team-search-submit]');
  })

  describe('when the team is found', () => {

    const getEvent = (value) => ({
        target: {
          value: value
        }
    })


    it('displays additional information about the teams', () => {
      searchInput.simulate('change', getEvent('Birmingham Bolts'));
      searchButton.simulate('click');
      const searchResults = component.find('[data-team-search-results]').text();
      expect(searchResults).toEqual('Birmingham Bolts - Birmingham, Alabama - Colors: Purple, Yellow, Silver');
    })


    it('gives a result for a partial match', () => {
      searchInput.simulate('change', getEvent('Birmingham'));
      searchButton.simulate('click');
      const searchResults = component.find('[data-team-search-results]').text();
      expect(searchResults).toEqual('Birmingham Bolts - Birmingham, Alabama - Colors: Purple, Yellow, Silver');
    })

    it('gives multiple results', () => {
      searchInput.simulate('change', getEvent('a'));
      searchButton.simulate('click');
      const searchResults = component.find('[data-team-search-results]').children();
      expect(searchResults).toHaveLength(3);
    })

    it('ignores case', () => {
      searchInput.simulate('change', getEvent('birmingham'));
      searchButton.simulate('click');
      const searchResults = component.find('[data-team-search-results]').children();
      expect(searchResults).toHaveLength(1);
    })
  })
})
