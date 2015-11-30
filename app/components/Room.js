import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class Room extends Component {
  fetchDialog(hotspotID) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const body = this.formatDialog(data);
        this.props.handlePopulateModal(data.title, body);
      } else {
        this.props.handlePopulateModal('Oh no!', 'Something wrong happened.');
      }
    });

    xhr.addEventListener("error", () => {
      this.props.handlePopulateModal('Oh no!', 'Something wrong happened.');
    });

    xhr.open('get', '/data/dialogs/' + hotspotID + '.json');
    xhr.send();
  }

  formatDialog(data) {
    const className = data.task ?
      'dialog-wrapper dialog-wrapper--task' : 'dialog-wrapper';

    return(
      <div className={className}>
        <div
          className='dialog-body'
          dangerouslySetInnerHTML={{__html: data.body}}>
        </div>
        <div className='dialog-task'>TASK!</div>
      </div>
    );
  }

  render() {
    const hotspots = this.props.hotspots.map(hotspot => {
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
