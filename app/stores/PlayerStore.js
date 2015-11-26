import {Store} from 'flux/utils';
import GameDispatcher from '../dispatcher/GameDispatcher';
import crimeClues from '../../public/data/crime-clues.json';

class PlayerStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);
    this._playerData = {
      name: '',
      score: 0,
      crimeClues: {
        where: {
          discovered: false,
          heading: crimeClues.where.heading,
          discoveredText: ''
        },
        when: {
          discovered: false,
          heading: crimeClues.when.heading,
          discoveredText: ''
        },
        how: {
          discovered: false,
          heading: crimeClues.how.heading,
          discoveredText: ''
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
        break;
      case 'player/discoverCrimeClue':
        this._playerData.crimeClues[payload.key].discovered = true;
        this._playerData.crimeClues[payload.key].discoveredText = crimeClues[payload.key].discoveredText;
        this.__emitChange();
        break;
      default:
        return false;
    }
  }
}

export default new PlayerStore(GameDispatcher);
