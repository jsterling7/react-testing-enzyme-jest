import React, {Component} from 'react'

export default class TeamSearch extends Component {
    state = {
        searchTerm: '',
        searchResult: {},
        teamData: [
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
            }]
    }

    handleInputChange = ({target: {value}}) => {
        this.setState({
            searchTerm: value
        })
    }

    handleSearchSubmit = ({preventDefault}) => {
        preventDefault()

        const {teamData, searchTerm} = this.state

        const searchResult = teamData.find(team => team.name === searchTerm)

        this.setState({
            searchResult
        })
    }

    renderSearchResults = () => {
        if (this.state.searchResult) {
            const {name, location, colors} = this.state.searchResult

            return (
                <span>{`${name} - ${location} - Colors: ${colors}`}</span>
            )
        } else {
            return (
                <div>No Results Found</div>
            )
        }

    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSearchSubmit}>
                    <input
                        type="text"
                        data-team-search-input
                        onChange={this.handleInputChange}
                    />

                    <input
                        type="submit"
                        data-team-search-submit
                        name="SUBMIT ME!"
                        onClick={this.handleSearchSubmit}
                    />
                </form>

                <div data-team-search-results>
                    {this.renderSearchResults()}
                </div>
            </div>
        )
    }
}