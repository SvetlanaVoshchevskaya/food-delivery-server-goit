const User = require('../../mongo/Schemas/user');

const getUser = (request, response) => {
  const newUserData = request.body;
  const userID = request.params.userID;

  const succsessResponse = newUser => {
    response.set('Content-Type', 'application/json'),
      response.status(200),
      response.json({ status: 'success', newUser });
  };

  User.findByIdAndUpdate(userID, newUserData, { new: true })
    .then(succsessResponse)
    .catch(error => console.error(error));
};
module.exports = getUser;
