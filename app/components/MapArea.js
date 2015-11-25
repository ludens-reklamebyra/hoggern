import React, {Component} from 'react';

class MapArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inRoom: null
    }
  }

  render() {
    const rooms = this.props.rooms.map((room) => {
      const className = room.unlocked ?
        'room-card room-card__unlocked' : 'room-card';

      return(
        <div key={room._id} className={className}>
          <div className='room-card__container'>
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
                <div><i className='interaction__icon fa fa-angle-left'></i>
                Tilbake til spillbrettet</div> : null}
            </span>
          </div>
          <h2>Ludens lokaler</h2>
          <div className='map-nav__interaction'></div>
        </div>
        <div className='map-content'>
          {this.state.inRoom ? null : <div className='rooms-list'>{rooms}</div>}
        </div>
      </div>
    );
  }
}

export default MapArea;