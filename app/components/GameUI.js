import React, {Component} from 'react';
import RoomsStore from '../stores/RoomsStore';
import RoomsActionCreator from '../actions/RoomsActionCreator';
import SuspectsActionCreator from '../actions/SuspectsActionCreator';
import RoomsList from './RoomsList';

class GameUI extends Component {
  constructor(props) {
    super(props);
    this._roomsListener = null;
  }

  componentWillMount() {
    this._roomsListener = RoomsStore.addChangedListener(() => {
      this._handleRoomsChange();
    });
  }

  componentWillUnmount() {
    this._roomsListener = RoomsStore.removeChangedListener(this._roomsListener);
  }

  render() {
    const rooms = this.props.rooms.map((room) => {
      return(
        <li key={room._id}>
          {room.name}
          {!room.unlocked ? <span style={{color: 'gray'}}> (Locked)</span> : null}
        </li>
      );
    });

    const suspects = this.props.suspects.map((suspect) => {
      return <li key={suspect._id}>{suspect.name}</li>
    });

    return (
      <div>
        <RoomsList rooms={this.props.rooms} />
        <ul>{rooms}</ul>
        <button onClick={this._handleButtonPress}>Unlock Kjerstins kontor</button>
      </div>
    );
  }

  _handleButtonPress() {
    RoomsActionCreator.unlock('kjerstins_office');
  }

  _handleRoomsChange() {
    // When rooms store is updated, this is called
  }
}

export default GameUI;
