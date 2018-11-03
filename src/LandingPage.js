import React, {Component} from 'react'
import './LandingPage.css'

class LandingPage extends Component {
    state = {
        searchTerm: '',
        searchResult: null,
        teams: [
            {
                id: 1,
                name: "Birmingham Bolts",
                location: "Birmingham, Alabama",
                colors: "Purple, Yellow, Silver"
            }, {
                id: 2,
                name: "Orlando Rage",
                location: "Orlando, Florida",
                colors: "Red, Navy, Gold, White"
            }, {
                id: 3,
                name: "Seattle Street Sharks",
                location: "Seattle, Washington",
                colors: "Red, Gray, Blue, Black"
            }
        ]
    }


    updateTeamSearchInput = ({target: {value}}) => {
        this.setState({searchTerm: value})
    }

    searchForTeam = (e) => {
        e.preventDefault()

        let {teams, searchTerm} = this.state

        const searchResult = teams.filter(team => team.name === searchTerm)[0]

        this.setState({
            searchResult
        })
    }

    renderSearchResults() {
        let {searchResult} = this.state

        if (searchResult) {
            return (
                <div data-team-search-results>
                    {searchResult.name} - {searchResult.location} - Colors: {searchResult.colors}
                </div>
            )
        } else {
            return (
                <div/>
            )
        }
    }

    render() {
        return (
            <div className="LandingPage">
                <h1>Welcome to the Fantasy Football LandingPage!</h1>
                <h3>The central source for all drafting, roster moves, and the latest player information.</h3>

                <div>
                    <input
                        type="text"
                        onChange={this.updateTeamSearchInput}
                        data-team-search-input
                    />
                    <button
                        onClick={this.searchForTeam}
                        data-team-search-submit
                    >
                        Search!
                    </button>

                    {this.renderSearchResults()}
                </div>
            </div>
        )
    }
}

export default LandingPage
