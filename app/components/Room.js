import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class Room extends Component {
  fetchDialog(hotspotID) {
    this.props.handlePopulateModal(hotspotID, 'body');
  }

  render() {
    const hotspots = this.props.hotspots.map((hotspot) => {
      return(
        <button
          key={hotspot._id}
          onClick={() => {
            this.props.handleOpenModal(() => this.fetchDialog(hotspot._id));
          }}
          className='hotspot'
          style={{
            top: hotspot.coords[0] + 'px',
            left: hotspot.coords[1] + 'px'
          }}>
        </button>
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
