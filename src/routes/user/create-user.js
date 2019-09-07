const User = require('../../mongo/Schemas/user');

const createUser = (request, response) => {
  const user = request.body;
  const userData = { ...user };
  const newUser = new User(userData);

  const succsessResponse = () => {
    response.set('Content-Type', 'application/json');
    response.status(200);
    response.json({ status: 'success', newUser });
  };

  const errorResponse = () => {
    response.status(200);
    response.json({ error: 'User was not saved' });
  };
  newUser
    .save()
    .then(succsessResponse)
    .catch(errorResponse);
};

module.exports = createUser;
