import {Store} from 'flux/utils';
import GameDispatcher from '../dispatcher/GameDispatcher';
import hotspotsData from '../../public/data/hotspots.json';

class HotspotsStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);
    this._hotspots = hotspotsData;
  }

  getHotspots() {
    return this._hotspots;
  }

  __onDispatch(payload) {
    switch (payload.type) {
      default:
        return false;
    }
  }
}

export default new HotspotsStore(GameDispatcher);
