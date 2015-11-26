import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class Room extends Component {
  render() {
    const hotspots = this.props.hotspots.map((hotspot) => {
      return(
        <div
          key={hotspot._id}
          onClick={() => this.props.handleModal(hotspot._id)}
          className='hotspot'
          style={{
            top: hotspot.coords[0] + 'px',
            left: hotspot.coords[1] + 'px'
          }}>
        </div>
      );
    });

    return(
      <div className='room-wrapper'>
        <div
          className='room-underlay'
          style={{
            backgroundImage: 'url(/images/rooms/'
              + this.props.room.stages[this.props.room.currentStage]
              + ')'
          }}
          >
        </div>
        <div
          className='room'
          style={{
            backgroundImage: 'url(/images/rooms/'
              + this.props.room.stages[this.props.room.currentStage]
              + ')'
          }}>
          {hotspots}
        </div>
      </div>
    );
  }
}

export default Room;
