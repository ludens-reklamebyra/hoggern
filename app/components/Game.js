import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {Container} from 'flux/utils';
import PlayerStore from '../stores/PlayerStore';
import RoomsStore from '../stores/RoomsStore';
import SuspectsStore from '../stores/SuspectsStore';
import HotspotsStore from '../stores/HotspotsStore';
import GameUI from './GameUI';

class Game extends Component {
  static getStores() {
    return [
      PlayerStore,
      RoomsStore,
      SuspectsStore,
      HotspotsStore
    ];
  }

  static calculateState() {
    return {
      playerData: PlayerStore.getPlayerData(),
      rooms: RoomsStore.getRooms(),
      suspects: SuspectsStore.getSuspects(),
      hotspots: HotspotsStore.getHotspots()
    };
  }

  render() {
    return <GameUI
      playerData={this.state.playerData}
      rooms={this.state.rooms}
      suspects={this.state.suspects}
      hotspots={this.state.hotspots} />;
  }
}

const GameContainer = Container.create(Game, {pure: false});
export default GameContainer;
