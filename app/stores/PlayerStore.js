import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import GameDispatcher from '../dispatcher/GameDispatcher';
import crimeClues from '../../public/data/crime-clues.json';

const playerData = {
  name: '',
  score: 0,
  detectiveNotes: [],
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

class PlayerStore extends ReduceStore {
  getInitialState() {
    return Immutable.fromJS(playerData);
  }

  reduce(state, action) {
    switch (action.type) {
      case 'player/addScore':
        return state.update('score', score => score + action.scoreToAdd);
      case 'player/addDetectiveNote':
        return state.update('detectiveNotes', arr => arr.push(action.text));
      default:
        return state;
    }
  }
}

export default new PlayerStore(GameDispatcher);
