import {Store} from 'flux/utils';
import GameDispatcher from '../dispatcher/GameDispatcher';
import crimeClues from '../../resources/data/crime-clues.json';

class PlayerStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);
    this._playerData = {
      name: '',
      score: 0,
      crimeClues: {
        where: {
          discovered: false,
          text: crimeClues.where.undiscoveredText
        },
        when: {
          discovered: false,
          text: crimeClues.when.undiscoveredText
        },
        how: {
          discovered: false,
          text: crimeClues.how.undiscoveredText
        }
      }
    };
  }

  getPlayerData() {
    return this._playerData;
  }

  __onDispatch(payload) {
    switch (payload.type) {
      case 'player/addScore':
        this._playerData.score += payload.scoreToAdd;
        this.__emitChange();
      case 'player/discoverCrimeClue':
        this._playerData.crimeClues[payload.key].discovered = true;
        this._playerData.crimeClues[payload.key].text = crimeClues[payload.key].discoveredText;
        this.__emitChange();
      default:
        return false;
    }
  }
}

export default new PlayerStore(GameDispatcher);
