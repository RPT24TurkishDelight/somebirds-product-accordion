// require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./database/psql.js');
const port = 3002;
const cors = require('cors');
const axios = require('axios');

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
    res.send(doc.rows[0]);
  });
});

app.post('/products', (req, res) => {
  console.log(req.body);
  helpers.createShoeData( req.body, (err, data) => {
    if (err) {
      res.send(err).status(406);
    } else {
      res.send('Success').status(200);
    }
  })
})

app.put('/products', (req, res) => {
  helpers.updateShoeData(req.query.id, req.body, (err, shoe) => {
    if (err) {
      res.send(err).status(406);
    } else {
      res.send(shoe).status(200);
    }
  })
})

app.delete('/products', (req, res) => {
  helpers.deleteShoeData(req.query.id, (err, shoe) => {
    if (err) {
      res.send(err).status(406);
    } else {
      res.send(shoe).status(200);
    }
  })
})

module.exports = app;