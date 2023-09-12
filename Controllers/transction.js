const Transaction = require("../models/transaction.model");
const moment = require("moment");
const TransactionType = require("../models/transactionType.model");

const getAllTransactions = async (req, res) => {
  Transaction.find()
    .populate("company", "name")
    .then((transactions) => res.status(200).json(transactions))
    .catch((error) => res.status(400).json(error));
};

const postTransaction = async (req, res) => {
  const { deposit, withdrew, date, company, postBy, transactionType } =
    req.body;

  const transaction = new Transaction({
    deposit,
    withdrew,
    date,
    company,
    postBy,
    transactionType,
  });

  transaction
    .save()
    .then((transaction) => {
      res.status(200).json(transaction);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const transactionPerPeriod = async (req, res) => {
  const { period } = req.body;
  let startDate, endDate;

  switch (period) {
    case 1:
      startDate = moment().subtract(30, "days").toDate();
      endDate = new Date();
      break;

    case 2:
      startDate = moment().subtract(60, "days").toDate();
      endDate = new Date();
      break;

    case 3:
      startDate = moment().subtract(90, "days").toDate();
      endDate = new Date();
      break;

    case 4:
      startDate = moment().subtract(180, "days").toDate();
      endDate = new Date();
      break;

    case 5:
      startDate = moment().subtract(366, "days").toDate();
      endDate = new Date();
      break;

    case 6:
      getAllTransactions(req, res);
      return;

    default:
      res.status(400).send("Invalid date range");
      return;
  }
  // Build query
  const query = {
    date: {
      $gte: startDate,
      $lte: endDate,
    },
  };

  try {
    const transactions = await Transaction.find(query)
      .populate("company", "name")
      .exec();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const transactionPerType = async (req, res) => {
  try {
    const { type } = req.params;

    const transactionType = await TransactionType.findOne({ name: type });

    if (!transactionType) {
      return res.status(404).json({
        message: "Transaction Type not found",
      });
    }
    const transactions = await Transaction.find({
      transactionType: transactionType._id,
    })
      .populate("company", "name")
      .populate("postBy", "username")
      .populate("transactionType", "name");

    return res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllTransactions,
  postTransaction,
  transactionPerPeriod,
  transactionPerType,
};
