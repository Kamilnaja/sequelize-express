const bodyParser = require("body-parser");
const express = require("express");
const sequelize = require("./sequelize");
const routes = require("./routes/router");
const morgan = require("morgan");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan());
app.use("/api", routes);

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
