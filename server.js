const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./database/helpers.js');
const port = 3002;
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get('/products/:shoeId/summary', (req, res) => {

  helpers.getShoeData(req.params.shoeId, (err, doc) => {
    if (err) {
      res.sendStatus(404);
    }
    res.send(doc[0]);
  });
});

module.exports = app;