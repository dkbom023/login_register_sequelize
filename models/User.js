// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const userSchema = new Schema({
//   name: String,
//   username: {
//     type: String,
//     unique: true,
//   },
//   password: String,
// });
// const UserModel = mongoose.model("User", userSchema);
// module.exports = UserModel;

const { sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
});

User.sync({ alter: true });

// const UserModel = User;
module.export = User;
