import express from 'express';
import bodyParser from 'body-parser';
import path, {join} from 'path';
import routes from './app/routes/routes';

const app = express();
const port = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

app.listen(port, () => {
  console.log('What a success at port ' + port);
});

export default app;
