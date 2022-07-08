import express, { Express } from 'express';
import cors from './config/cors';
import { routes as webRoutes } from './routes/web';
import { routes as apiRoutes } from './routes/api';

const app: Express = express();
const port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cors);
app.use(express.json());
app.use('/static', express.static(__dirname + '/public'));

app.use('/', webRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.info(`App started on port ${port}`);
});
