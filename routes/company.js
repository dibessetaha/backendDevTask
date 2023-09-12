const express = require("express");
const router = express.Router();
const companyCtrl = require("../Controllers/company");

router.post("/", companyCtrl.addCompany);

module.exports = router;
