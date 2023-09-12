const express = require("express");
const router = express.Router();
const userCtrl = require("../Controllers/user");

router.post("/", userCtrl.addUSer);

module.exports = router;
