const express = require("express");
const Category = require("../models/categories.model");
const router = express.Router();

router.get("/categories", (req, res) => {
  Category.findAll().then((data) => res.json(data));
});

router.post("/categories");

router.get("/categories/:id", (req, res, next) => {
  Category.findAll({ where: { id: req.params.id } })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
