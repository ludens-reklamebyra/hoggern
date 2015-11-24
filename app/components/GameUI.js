import React, {Component} from 'react';
import RoomsStore from '../stores/RoomsStore';
import PlayerActionCreator from '../actions/PlayerActionCreator';
import RoomsList from './RoomsList';

class GameUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInRoom: false
    }
  }

  render() {
    return(
      <div>
        <h1>Welcome to the gamer</h1>
        <h2>Crime clues:</h2>
        <ul>
          <li>{this.props.playerData.crimeClues.where.text}</li>
          <li>{this.props.playerData.crimeClues.when.text}</li>
          <li>{this.props.playerData.crimeClues.how.text}</li>
        </ul>
        <button onClick={this._handleClick}>Discover random clue</button>
        <h2>Rooms:</h2>
        {!this.state.isInRoom ?
          <RoomsList rooms={this.props.rooms} />
         : <p>Is in room</p>}
      </div>
    );
  }

  _handleClick() {
    const possibleClues = ['where', 'when', 'how'];
    PlayerActionCreator.discoverCrimeClue(
      possibleClues[Math.floor(Math.random() * possibleClues.length)]
    );
  }
}

export default GameUI;
