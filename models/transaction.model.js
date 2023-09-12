const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    deposit: {
      type: Number,
      required: true,
      default: 0,
    },
    withdrew: {
      type: Number,
      required: true,
      default: 0,
    },
    date: {
      type: Date,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    postBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    transactionType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TransactionType",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", transactionSchema);
