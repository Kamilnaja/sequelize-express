const express = require("express");
const Category = require("../models/categories.model");
const router = express.Router();

router.get("/categories", (req, res) => {
  Category.findAll().then((data) => res.json(data));
});

router.get("/categories/:id", (req, res, next) => {
  Category.findOne({ where: { id: req.params.id } })
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/categories", (req, res, next) => {
  Category.create(req.body)
    .then((category) => res.json(category))
    .catch(next);
});

router.delete("/categories/:id", (req, res, next) => {
  Category.findByPk(req.params.id)
    .then((category) => category.destroy())
    .then(() => res.sendStatus(200))
    .catch(next);
});

module.exports = router;
