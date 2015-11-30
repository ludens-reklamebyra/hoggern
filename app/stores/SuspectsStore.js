import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import GameDispatcher from '../dispatcher/GameDispatcher';
import suspectsData from '../../public/data/suspects.json';

class SuspectsStore extends ReduceStore {
  getInitialState() {
    return Immutable.List(suspectsData);
  }

  reduce(state, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
}

export default new SuspectsStore(GameDispatcher);
