const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

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
app.use(morgan('combined'));

app.use(errorHandler);

app.listen(3000, () => {
  console.log(`listening on localhost:3000`);
});
