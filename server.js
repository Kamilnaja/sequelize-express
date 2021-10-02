const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const db = require('./db/initializeDb');
const errorHandler = require('./error-handler');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(errorHandler);

app.listen(port, async () => {
  await db.initDb();
  console.log(`listening on localhost:${port}`);
});
