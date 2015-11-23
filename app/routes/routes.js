const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Game = React.createFactory(require('../components/Game'));

module.exports = function(app) {
	app.get('/', (req, res) => {
		const markup = ReactDOMServer.renderToString(Game());
    console.log(markup);
    res.render('game', {game: markup});
	});
};
