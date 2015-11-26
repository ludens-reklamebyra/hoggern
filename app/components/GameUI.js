import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import GameBoard from './GameBoard';

class GameUI extends Component {
  render() {
    return <GameBoard {...this.props} />;
  }
}

export default GameUI;
