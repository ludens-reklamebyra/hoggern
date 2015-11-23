'use strict';
const React = require('react');
const Container = require('flux/utils').Container;
const TestStore = require('../stores/TestStore');

class Game extends React.Component {
  static getStores() {
    return [TestStore];
  }

  static calculateState(prevState) {
    return {
      test: TestStore.getState(),
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.test}</h1>
        <a onClick={this._onClick}>Click me</a>
      </div>
    );
  }
}
const GameContainer = Container.create(Game);
module.exports = GameContainer;
