const bodyParser = require("body-parser");
const express = require("express");
const sequelize = require("./sequelize");
const routes = require("./routes/categories");
const morgan = require("morgan");
const app = express();

const errorHandler = (err, req, res, next) => {
  res.json(
    err.errors.map((item) => ({
      message: item.message,
      type: item.type,
    }))
  );
  next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use("/api/categories", routes);

app.use(errorHandler);

async function assertDatabaseConnectionOk() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

async function init() {
  await assertDatabaseConnectionOk();
}

init();

app.listen(3000, () => {
  console.log(`listening on localhost:3000`);
});
