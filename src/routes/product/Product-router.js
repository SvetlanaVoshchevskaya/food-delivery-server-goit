const Product = require('../../mongo/Schemas/product');

const product = (request, response) => {
  const product = request.body;
  const productData = { ...product, likes: Math.floor(Math.random() * 10) };
  const newProduct = new Product(productData);

  newProduct
    .save()
    .then(
      response.set('Content-Type', 'application/json'),
      response.status(200),
      response.send(newProduct)
    )
    .catch(() => console.log('Error'));
};
module.exports = product;
