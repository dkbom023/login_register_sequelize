const express = require("express");
const router = express.Router();
const User = require("../models/User");

const isLoggedIn = (req, res, next) => {
  console.log(req.session.user);
  if (!req.session.user) {
    res.redirect("/login");
  }
  next();
};

// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });
router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/", isLoggedIn, function (req, res, next) {
  console.log(req.session);
  res.render("index", { user: req.session.user.name });
});

module.exports = router;
