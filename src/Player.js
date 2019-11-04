import React, {PureComponent} from 'react';

import Counter from './Counter';
// PureComponent is a built in function that only renders whats actually changed, in this instace, before all players were being updated even is only one
// players score was being updated all players would re-render.
class Player extends PureComponent {
  render(){

    //Same as header file, can get rid of using this.props (has to be differetn as its a class )
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props;
    return (
      <div className="player">
        <span className="player-name">
        <button className="remove-player" onClick={ () => removePlayer(id)}>x</button>
          {name}
        </span>

        <Counter
          score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player;
