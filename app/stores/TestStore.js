'use strict';
const ReduceStore = require('flux/utils').ReduceStore;

class TestStore extends ReduceStore {
  getInitialState() {
    return {
      test: 'test'
    };
  }

  reduce(state, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
}

module.exports = TestStore;
