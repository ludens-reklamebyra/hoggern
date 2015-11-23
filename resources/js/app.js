const React = require('react');
const ReactDOM = require('react-dom');
const Game = React.createFactory(require('../../app/components/Game'));

if (typeof window !== 'undefined') {
  window.onload = () => {
    ReactDOM.render(Game(), document.getElementById('game'));
  };
}
