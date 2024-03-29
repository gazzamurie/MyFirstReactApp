import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {

  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  // playerid counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return{
        players: [
          ...this.state.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState =>{
      return{
        players: prevState.players.filter( p => p.id !== id )
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />
        {this.state.players.map( (player, index)=>
          <Player
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;


// import Depart from './departInfo';
// class App extends Component {
//   render() {
//
//       return (
// <Depart depart={this.state.depart} />
// )
// }
//
//
//   state = {
//     depart: []
//   }
//
//   componentDidMount(){
//     fetch('https://kabrudle.edinburghairport.com/api/flights/all')
//     .then(res => res.json())
//     .then((data) => {
//       this.setState({ depart : data})
//     })
//     .catch(console.log)
//   }
//
// }
//
// export default App;
