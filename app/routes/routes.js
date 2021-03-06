import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOMServer from 'react-dom/server';
import Game from '../components/Game';

export default function(app) {
  app.get('/', (req, res) => {
    const markup = ReactDOMServer.renderToString(<Game />);
    res.render('game', {game: markup});
  });
}
