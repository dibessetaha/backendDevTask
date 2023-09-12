const express = require("express");
const mongoose = require("mongoose");
const app = express();
const transactionRoutes = require("./routes/transaction");
const usersRoutes = require("./routes/user");
const companyRoutes = require("./routes/company");
const transactionTypeRoutes = require("./routes/trasactionType");

app.use(express.json());

mongoose
  .connect("mongodb://0.0.0.0:27017/testAssignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 0,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((e) => console.log(e));

app.use("/api/transactions", transactionRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/transactionType", transactionTypeRoutes);

module.exports = app;
