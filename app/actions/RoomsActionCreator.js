import GameDispatcher from '../dispatcher/GameDispatcher';

export default {
  unlock: function(id) {
    GameDispatcher.dispatch({
      type: 'rooms/unlock',
      id: id
    });
  }
};
