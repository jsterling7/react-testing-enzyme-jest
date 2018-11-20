import React, {Component} from 'react'
import './App.css'
import constants from './constants'
class App extends Component {
    players = [
        'My Buddy',
        'Pro Buddy',
        'Rookie Buddy'
    ]

    render() {
        return (
            <div className="App">
                <h1 data-greeting id="header">
                    {constants.WELCOME_TEXT}
                </h1>
                <h3 data-blurb>
                    {constants.BLURB_TEXT}
                </h3>
                <div className="card">
                    <ul data-player-list>
                        {this.players.map(player => (
                            <li
                                data-player
                                key={player}
                                isPro={player.includes('Pro')}
                                styles={{ fontWeight: '900' }}
                            >
                                {player}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App
