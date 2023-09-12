const Company = require("../models/company.model");

const addCompany = async (req, res) => {
  const { name, location } = req.body;

  const company = new Company({
    name,
    location,
  });

  company
    .save()
    .then((company) => {
      res.status(200).json(company);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

module.exports = {
  addCompany,
};
