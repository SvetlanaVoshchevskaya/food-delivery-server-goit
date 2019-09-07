const express = require('express');
const mainRouter = require('./main-router');
const product = require('./product/Product-router');
const idProduct = require('./product/put-product-id');
const createUser = require('./user/create-user');
const getUser = require('./user/put-user');
const createOrders = require('./orders/create-order');
const getOrders = require('./orders/get-orders');

const router = express.Router();

router
  .put('/products/:id', idProduct)
  .post('/products', product)
  .post('/users', createUser)
  .post('/orders', createOrders)
  .get('/orders/:id', getOrders)
  .put('/users/:userID', getUser)
  .get('/', mainRouter);

module.exports = router;
