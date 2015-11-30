import GameDispatcher from '../dispatcher/GameDispatcher';

export default {
  score: function(scoreToAdd) {
    GameDispatcher.dispatch({
      type: 'player/addScore',
      scoreToAdd: scoreToAdd
    });
  },
  addDetectiveNote: function(text) {
    GameDispatcher.dispatch({
      type: 'player/addDetectiveNote',
      text: text
    });
  },
  discoverCrimeClue: function(key) {
    GameDispatcher.dispatch({
      type: 'player/discoverCrimeClue',
      key: key
    });
  }
};
