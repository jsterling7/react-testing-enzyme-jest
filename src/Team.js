import React, {Component} from 'react';
import axios from 'axios';

export default class Team extends Component {


  constructor(props) {
    super(props);
    this.state = {
      playerData: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('http://super-cool-site.biz/players');

    this.setState({
      playerData: data
    })
  }

  renderPlayers = (playerData) => {
    return (
      playerData.map((player) => (
        <div data-player-name key={player.name}>{player.name}</div>
      ))
    )
  }

  render() {
    const {playerData} = this.state;
    if (playerData) {
      return (
        <div>
          {this.renderPlayers(playerData)}
        </div>
      )
    } else {
      return (<div>LOADING!!!</div>)
    }
  }
}
