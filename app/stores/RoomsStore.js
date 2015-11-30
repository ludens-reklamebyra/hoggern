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
        const rooms = state.map((room) => {
          if (room._id === action.id) {
            room.unlocked = true;
          }

          return room;
        });

        return Immutable.List(rooms);
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
