import {ReduceStore} from 'flux/utils';
import GameDispatcher from '../dispatcher/GameDispatcher';

class TestStore extends ReduceStore {
  getInitialState() {
    return 'test';
  }

  reduce(state, action) {
    switch (action.type) {
      case 'test/test':
        return action.text;
      default:
        return state;
    }
  }
}

export default new TestStore(GameDispatcher);
