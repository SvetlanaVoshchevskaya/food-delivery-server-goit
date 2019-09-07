const Order = require('../../mongo/Schemas/order');

const createOrders = (request, response) => {
  const orders = request.body;
  const orderData = { ...orders };
  const newOrders = new Order(orderData);

  const succsessResponse = () => {
    response.set('Content-Type', 'application/json'),
      response.status(200),
      response.json({ status: 'success', newOrders });
  };

  newOrders
    .save()
    .then(succsessResponse)
    .catch(() => console.log('Error'));
};
module.exports = createOrders;
