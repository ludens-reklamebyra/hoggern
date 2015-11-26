import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import MapArea from './MapArea';
import MenuArea from './MenuArea';
import SuspectsArea from './SuspectsArea';

class GameBoard extends Component {
  render() {
    return(
      <div className='game-board'>
        <MapArea
          rooms={this.props.rooms}
          hotspots={this.props.hotspots}
          handleModal={this.props.handleModal} />
        <MenuArea playerData={this.props.playerData} />
        <SuspectsArea suspects={this.props.suspects} />
      </div>
    );
  }
}

export default GameBoard;
