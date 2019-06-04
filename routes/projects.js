const express = require("express");
const router = express.Router();

router.get("/pizzamagic", (req, res) => {
  res.render("projects/pizzamagic");
});

router.get("/wellbeing", (req, res) => {
  res.render("projects/wellbeing");
});

module.exports = router;
