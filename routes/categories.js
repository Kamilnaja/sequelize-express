const express = require("express");
const Category = require("../models/categories.model");
const router = express.Router();

router.get("/", (req, res) => {
  Category.findAll().then((data) => res.json(data));
});

router.get("/:id", (req, res, next) => {
  Category.findByPk(req.params.id)
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/", (req, res, next) => {
  Category.create(req.body)
    .then((category) => res.json(category))
    .then(() => res.sendStatus(201))
    .catch((err) => next(err));
});

router.put("/:id", (req, res, next) => {
  Category.findByPk(req.params.id)
    .then((category) => category.update(req.body))
    .then(() => res.sendStatus(201))
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  Category.findByPk(req.params.id)
    .then((category) => category.destroy())
    .then(() => res.sendStatus(200))
    .catch(next);
});

module.exports = router;
