const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/api/:role/:name', (req, res) => {
  res.end(JSON.stringify(req.body) + '\r\n');
});

app.post('/api/', (req, res) => {
  console.log(req.route);
  res.end(JSON.stringify(req.body) + '\r\n');
});

app.listen(3000, () => {
  console.log(`listening on localhost:3000`);
});
