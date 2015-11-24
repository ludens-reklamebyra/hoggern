import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../../app/components/Game';

if (typeof window !== 'undefined') {
  window.onload = () => {
    ReactDOM.render(<Game />, document.getElementById('game'));
  };
}
