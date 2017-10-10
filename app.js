/* Absolute imports */
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import dotenv from 'dotenv';

/* Relative imports */
import db from './db';
import userRoutes from './server/routes/userRoutes';
import messageRoutes from './server/routes/messageRoutes';


dotenv.config();

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

userRoutes(app);
messageRoutes(app);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

module.exports = app;
