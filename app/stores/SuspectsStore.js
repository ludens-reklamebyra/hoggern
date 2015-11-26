import {Store} from 'flux/utils';
import GameDispatcher from '../dispatcher/GameDispatcher';
import suspectsData from '../../public/data/suspects.json';

class SuspectsStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);
    this._suspects = suspectsData;
  }

  getSuspects() {
    return this._suspects;
  }

  __onDispatch(payload) {
    switch (payload.type) {
      default:
        return false;
    }
  }
}

export default new SuspectsStore(GameDispatcher);
