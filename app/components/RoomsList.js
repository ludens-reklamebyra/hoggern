import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import Room from './Room';

class RoomsList extends Component {
  render() {
    const rooms = this.props.rooms.map((room) => {
      return <Room key={room._id} name={room.name} unlocked={room.unlocked} />;
    });

    return(
      <div>
        <h1>Rooms</h1>
        <ul>{rooms}</ul>
      </div>
    );
  }
}

export default RoomsList;
