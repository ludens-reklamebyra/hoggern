import GameDispatcher from '../dispatcher/GameDispatcher';

export default {
  test: function(text) {
    GameDispatcher.dispatch({
      type: 'test/test',
      text: text
    });
  }
};
