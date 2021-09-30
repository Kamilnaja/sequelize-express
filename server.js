const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const db = require("./db/initializeDb");

const app = express();

const errorHandler = (err, req, res, next) => {
  const error = err.errors
    ? err.errors?.map((item) => ({
        message: item.message,
        type: item.type,
      }))
    : err;
  res.json(error);
  next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use(errorHandler);

db.initDb().catch((e) => console.log(e));

app.listen(3000, () => {
  console.log(`listening on localhost:3000`);
});
