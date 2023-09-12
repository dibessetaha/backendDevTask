const express = require("express");
const router = express.Router();
const trasactionTypeCtrl = require("../Controllers/trasactionType");

router.post("/", trasactionTypeCtrl.addTrasactionType);

module.exports = router;
