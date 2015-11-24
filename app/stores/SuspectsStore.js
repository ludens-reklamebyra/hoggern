import {ReduceStore} from 'flux/utils';
import GameDispatcher from '../dispatcher/GameDispatcher';
import SuspectsData from '../../resources/data/suspects.json';

class SuspectsStore extends ReduceStore {
  getInitialState() {
    return SuspectsData;
  }

  reduce(state, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
}

export default new SuspectsStore(GameDispatcher);
