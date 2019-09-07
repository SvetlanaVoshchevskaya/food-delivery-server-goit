const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  creator: String,
  productsList: [
    {
      product: Number,
      type: { type: String, default: 'M' },
      itemsCount: Number
    }
  ],
  deliveryType: String,
  deliveryAdress: String,
  sumToPay: Number,
  status: { type: String, default: 'inProgress' }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
