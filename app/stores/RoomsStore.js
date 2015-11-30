import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import GameDispatcher from '../dispatcher/GameDispatcher';
import roomsData from '../../public/data/rooms.json';

class RoomsStore extends ReduceStore {
  getInitialState() {
    return Immutable.List(roomsData);
  }

  reduce(state, action) {
    switch (action.type) {
      case 'rooms/unlock':
        return state.update(
          state.findIndex(v => v.get('_id') === action.id),
          v => v.set('unlocked', true)
        );
      default:
        return state;
    }
  }

  addChangedListener(cb) {
    return this.addListener(cb);
  }

  removeChangedListener(listener) {
    listener.remove();
    return null;
  }
}

export default new RoomsStore(GameDispatcher);
