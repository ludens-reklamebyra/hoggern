import React, {Component} from 'react';
import {Container} from 'flux/utils';
import TestStore from '../stores/TestStore';
import TestActionCreator from '../actions/TestActionCreator';

class Game extends Component {
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

  _onClick() {
    TestActionCreator.test('fønix');
  }
}

const GameContainer = Container.create(Game);
export default GameContainer;
