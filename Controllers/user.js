const User = require("../models/user.model");

const addUSer = async (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({
    username,
    email,
    password,
  });

  user
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

module.exports = {
  addUSer,
};
