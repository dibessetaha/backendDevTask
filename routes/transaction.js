const express = require("express");
const router = express.Router();
const transactionCtrl = require("../Controllers/transction");

router.get("/", transactionCtrl.getAllTransactions);
router.post("/", transactionCtrl.postTransaction);
router.get("/period", transactionCtrl.transactionPerPeriod);
router.get("/:type", transactionCtrl.transactionPerType);

module.exports = router;
