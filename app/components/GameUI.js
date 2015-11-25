import React, {Component} from 'react';
import GameBoard from './GameBoard';

class GameUI extends Component {
  render() {
    return <GameBoard {...this.props} />;
  }
}

export default GameUI;
