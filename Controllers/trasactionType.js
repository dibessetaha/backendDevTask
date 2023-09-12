const TrasactionType = require("../models/transactionType.model");

const addTrasactionType = async (req, res) => {
  const { name } = req.body;

  const transactionType = new TrasactionType({
    name,
  });

  transactionType
    .save()
    .then((transactionType) => {
      res.status(200).json(transactionType);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

module.exports = {
  addTrasactionType,
};
