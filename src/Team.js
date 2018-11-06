import {Component} from "react";
import React from "react";
import axios from 'axios'

export default class Team extends Component {

    constructor(props) {
        super(props)

        this.state = {
            playerData: []
        }
    }

    async componentDidMount() {
        const response = await axios.get('http://some_cool_service.biz/birminghambolts/players')

        this.setState({
            playerData: response.data
        })
    }

    render() {
        return (
            <div>
                <div data-team-players>
                    {this.state.playerData.map(player => <div key={player.name}>{player.name} - {player.team}</div>)}
                </div>
            </div>
        )
    }
}