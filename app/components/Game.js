import React, {Component} from 'react';
import {Container} from 'flux/utils';
import RoomsStore from '../stores/RoomsStore';
import SuspectsStore from '../stores/SuspectsStore';
import GameUI from './GameUI';

class Game extends Component {
  static getStores() {
    return [
      RoomsStore,
      SuspectsStore
    ];
  }

  static calculateState(prevState) {
    return {
      rooms: RoomsStore.getRooms(),
      suspects: SuspectsStore.getState()
    };
  }

  render() {
    return <GameUI rooms={this.state.rooms} suspects={this.state.suspects} />;
  }
}

const GameContainer = Container.create(Game);
export default GameContainer;
