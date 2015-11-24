import {Store} from 'flux/utils';
import GameDispatcher from '../dispatcher/GameDispatcher';
import roomsData from '../../resources/data/rooms.json';

class RoomsStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);
    this._rooms = roomsData;
  }

  getRooms() {
    return this._rooms;
  }

  addChangedListener(cb) {
    return this.addListener(cb);
  }

  removeChangedListener(listener) {
    listener.remove();
    return null;
  }

  __onDispatch(payload) {
    switch (payload.type) {
      case 'rooms/unlock':
        let rms = [];

        for (let room of this._rooms) {
          if (room._id === payload.id) {
            room.unlocked = true;
          }

          rms.push(room);
        }

        this._rooms = rms;
        this.__emitChange();
      default:
        return false;
    }
  }
}

export default new RoomsStore(GameDispatcher);
