require('babel-core/register')({
  presets: ['react']
});

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const join = require('path').join;
const routes = require('./app/routes/routes');

const app = express();
const port = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

app.listen(port, () => {
  console.log("What a success at port " + port);
});
