import GameDispatcher from '../dispatcher/GameDispatcher';

export default {
  addScore: function(scoreToAdd) {
    GameDispatcher.dispatch({
      type: 'player/addScore',
      scoreToAdd: scoreToAdd
    });
  },
  discoverCrimeClue: function(key) {
    GameDispatcher.dispatch({
      type: 'player/discoverCrimeClue',
      key: key
    });
  }
};
