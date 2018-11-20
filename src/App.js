import React, {Component} from 'react'
import './App.css'


const teams = [
{
    id: 1,
    name: "Birmingham Bolts",
    location: "Birmingham, Alabama",
    colors: "Purple, Yellow, Silver"
},{
    id: 2,
    name: "Orlando Rage",
    location: "Orlando, Florida",
    colors: "Red, Navy, Gold, White"
},{
    id: 3,
    name: "Seattle Street Sharks",
    location: "Seattle, Washington",
    colors: "Red, Gray, Blue, Black"
}]


class App extends Component {

    constructor(props) {
      super(props)
      this.state = {
        teamSearchInput: '',
        teamSearchResults: []
      }
    }

    handleSearchInput = (event) => {
      this.setState({
        teamSearchInput: event.target.value
      })
    }

    handleSearchSubmit = () => {
      let teamSearchResults = []
      for (let i = 0; i < teams.length; i++) {
        if (teams[i].name.toLowerCase().includes(this.state.teamSearchInput.toLowerCase())) {
          const match = teams[i];
          teamSearchResults.push(match.name + ' - ' + match.location + ' - Colors: ' + match.colors)
        }
      }
      this.setState({
        teamSearchResults: teamSearchResults
      })
    }

    renderteamSearchResults = () => {
      return this.state.teamSearchResults.map((result, index) => {
        return <li key={index}>{result}</li>
      })
    }

    render() {
        return (
            <div className="App">
              <h1>Welcome to the Fantasy Football App!</h1>
              <h3>The central source for all drafting, roster moves, and the latest player information</h3>
              <h2 data-undrafted-players-header>Undrafted Players</h2>
              <div data-player-list-box className='box'>
                <ul>
                  <li data-player1>Miguel Torrey</li>
                  <li data-player2>Gregory Ander</li>
                  <li data-player3>Randal Timber</li>
                </ul>
              </div>
              <div>
                <input type='text' onChange={this.handleSearchInput} value={this.state.teamSearchInput} data-team-search-input></input>
                <button onClick={this.handleSearchSubmit} data-team-search-submit>Search</button>
                <div>
                  <ul data-team-search-results>
                    {this.renderteamSearchResults()}
                  </ul>
                </div>
              </div>
            </div>
        )
    }
}

export default App
