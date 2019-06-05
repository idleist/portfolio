const express = require("express");
const router = express.Router();

router.get("/pizzamagic", (req, res) => {
  res.render("projects/pizzamagic");
});

router.get("/wellbeing", (req, res) => {
  res.render("projects/wellbeing");
});

router.get("/officeapp", (req, res) => {
  res.render("projects/officeapp");
});

router.get("/perrennialdesigns", (req, res) => {
  res.render("projects/perrennial");
});

router.get("/portfolio", (req, res) => {
  res.render("projects/portfolio");
});

module.exports = router;
