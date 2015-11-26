import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class MapArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inRoom: null
    }
  }

  render() {
    const rooms = this.props.rooms.map((room) => {
      const className = room.unlocked
        ? 'room-card__container room-card__container--unlocked'
        : 'room-card__container';

      return(
        <div key={room._id} className='room-card'>
          <div
            onClick={() => this._handleRoomClick(room)}
            className={className}>
            <div className='room-card__title'>{room.name}</div>
          </div>
        </div>
      );
    });

    return(
      <div className='map-area'>
        <div className='map-nav'>
          <div className='map-nav__interaction map-nav__interaction--back'>
            <span className='interaction'>
              {this.state.inRoom ?
                <div onClick={() => this._handleBackClick()}>
                  <i className='interaction__icon fa fa-angle-left'></i>
                  Tilbake til spillbrettet
                </div> : null}
            </span>
          </div>
          <h2>{this.state.inRoom ? this.state.inRoom.name : 'Ludens lokaler'}</h2>
          <div className='map-nav__interaction'></div>
        </div>
        <div className='map-content'>
          {this.state.inRoom ? null : <div className='rooms-list'>{rooms}</div>}
        </div>
      </div>
    );
  }

  _handleRoomClick(room) {
    if (!room.unlocked) return false;

    this.setState({
      inRoom: room
    });
  }

  _handleBackClick() {
    this.setState({
      inRoom: null
    });
  }
}

export default MapArea;
