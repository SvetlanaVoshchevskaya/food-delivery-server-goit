const Order = require('../../mongo/Schemas/order');

const getOrders = (request, response) => {
  const productId = request.params.id;

  const succsessResponse = order => {
    response.set('Content-Type', 'application/json'),
      response.status(200),
      response.json({ status: 'success', order });
  };

  Order.findById(productId)
    .then(succsessResponse)
    .catch(error => {
      console.error(error);
    });
};
module.exports = getOrders;
