import {ReduceStore} from 'flux/utils';
import GameDispatcher from '../dispatcher/GameDispatcher';

class PlayerStore extends ReduceStore {
  getInitialState() {
    return {
      name: null,
      score: 0
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'player/score':
        return state.score += action.score;
      default:
        return state;
    }
  }
}

export default new PlayerStore(GameDispatcher);
