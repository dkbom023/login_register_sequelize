// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/login-registerV2", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const { Sequelize } = require("sequelize");

const database = "seq_login";
const username = "root";
const password = "root";

const db = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
