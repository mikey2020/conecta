import express from 'express';
import  bodyParser from 'body-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

import db from './db';
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});



module.exports = app ;