import React, {Component} from 'react'
import './App.css'

class App extends Component {
    state = {
        playerList: [{
            name: "Usain Bolt"
        }, {
            name: "Bart Simpson"
        }]
    }

    renderTeamList() {
        return (
            <ul>
                {
                    this.state.playerList.map(({name}) => (
                        <li
                            className='make-bold'
                            key={name}
                        >{name}</li>
                    ))
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                {this.renderTeamList()}
            </div>
        )
    }
}

export default App
