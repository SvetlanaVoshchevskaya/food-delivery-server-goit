const Product = require('../../mongo/Schemas/product');

const idProduct = (request, response) => {
  const newproductData = request.body;
  const id = request.params.id;

  const succsessResponse = newProduct => {
    response.set('Content-Type', 'application/json'),
      response.status(200),
      response.json({ status: 'success', newProduct });
  };
  Product.findByIdAndUpdate(id, newproductData, { new: true })
    .then(succsessResponse)
    .catch(error => console.error(error));
};
module.exports = idProduct;
