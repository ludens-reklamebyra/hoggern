import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import GameDispatcher from '../dispatcher/GameDispatcher';
import hotspotsData from '../../public/data/hotspots.json';

class HotspotsStore extends ReduceStore {
  getInitialState() {
    return Immutable.List(hotspotsData);
  }

  reduce(state, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
}

export default new HotspotsStore(GameDispatcher);
