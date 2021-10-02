const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const db = require('./db/initializeDb');
const errorHandler = require('./error-handler');
const app = express();
const gradesRouter = require('./routes/grades.route');
const subjectsRouter = require('./routes/subjects.route');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/grades', gradesRouter);
app.use('/subjects', subjectsRouter);
app.use(errorHandler);

app.listen(port, async () => {
  await db.assertDatabaseConnectionOk();
  console.log(`listening on localhost:${port}`);
});
