import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../../app/components/Game';

if (typeof window !== 'undefined') {
  window.onload = () => {
    ReactDOM.render(<Game />, document.getElementById('game'));
  };

  /*window.onbeforeunload = (e) => {
    return 'Om du forlater eller oppdaterer siden vil du miste spillprogresjonen.';
  };*/
}
