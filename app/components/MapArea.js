import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import Room from './Room';

class MapArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inRoom: null,
      relevantHotspots: null
    }
  }

  componentDidMount() {
    document.addEventListener(
      'keydown',
      this._handleBackPress.bind(this)
      , false);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this._handleBackPress.bind(this)
      , false);
  }

  render() {
    const rooms = this.props.rooms.map(room => {
      const className = room.unlocked
        ? 'room-card__container room-card__container--unlocked'
        : 'room-card__container';

      return(
        <div key={room._id} className='room-card'>
          <a
            href='#'
            onClick={e => {
              e.preventDefault();
              this._handleRoomClick(room);
            }}
            className={className}>
            <div className='room-card__title'>{room.name}</div>
          </a>
        </div>
      );
    });

    return(
      <div className='map-area'>
        <div className='map-nav'>
          <div className='map-nav__interaction map-nav__interaction--back'>
            <span className='interaction'>
              {this.state.inRoom ?
                <a
                  href='#'
                  onClick={e => {
                    e.preventDefault();
                    this._handleBackClick();
                  }}>
                  <i className='interaction__icon fa fa-angle-left'></i>
                  Tilbake til spillbrettet
                </a> : null}
            </span>
          </div>
          <h2>{this.state.inRoom ? this.state.inRoom.name : 'Ludens lokaler'}</h2>
          <div className='map-nav__interaction'></div>
        </div>
        <div className='map-content'>
          {this.state.inRoom ?
            <Room
              room={this.state.inRoom}
              hotspots={this.state.relevantHotspots}
              handleOpenModal={this.props.handleOpenModal}
              handlePopulateModal={this.props.handlePopulateModal} />
            : <div className='rooms-list'>{rooms}</div>
          }
        </div>
      </div>
    );
  }

  _handleRoomClick(room) {
    if (!room.unlocked) return false;
    let relevantHotspots = [];

    for (let hotspot of this.props.hotspots) {
      if (hotspot.room === room._id && hotspot.stage === room.currentStage) {
        relevantHotspots.push(hotspot);
      }
    }

    this.setState({
      inRoom: room,
      relevantHotspots: relevantHotspots
    });
  }

  _handleBackClick() {
    this.setState({
      inRoom: null
    });
  }

  _handleBackPress(e) {
    if (this.state.inRoom) {
      if (e.keyCode === 8) {
        e.preventDefault();
        this._handleBackClick();
      }
    }
  }
}

export default MapArea;
