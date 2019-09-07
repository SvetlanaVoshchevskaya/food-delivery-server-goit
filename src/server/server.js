const express = require('express');
const mongoose = require('mongoose');
const router = require('../routes/route');
const bodyParser = require('body-parser');
const app = express();

const mongoUrl = 'mongodb://localhost:27017/hw05';

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};

const connectToDB = url => {
  mongoose
    .connect(url, { useNewUrlParser: true })
    .then(() => console.log('DataBase connect'))
    .catch(error => console.error('Database connect error'));
};

connectToDB(mongoUrl);

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/', router)
  .use(errorHandler);

app.listen(3000);
