const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./database/helpers.js');
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
    res.send(doc[0]);
  });
});

app.post('/products/create', (req, res) => {
  if (req.body === undefined || req.body === '' || Object.keys(req.body).length === 0) {
    res.send('Cannot create from empty').status(406);
  } else {
    helpers.createShoeData(req.body, (err, data) => {
      if (err) {
        res.send(err).status(406);
      } else {
        res.send(data).status(200);
      }
    })
  }
})

app.put('/products/update', (req, res) => {
  console.log(req.body);
  helpers.updateShoeData(req.body, (err, shoe) => {
    if (err) {
      res.send(err).status(406);
    } else {
      res.send(shoe).status(200);
    }
  })
})

app.delete('/products/delete', (req, res) => {
  console.log(req.body);
  helpers.deleteShoeData(req.body, (err, shoe) => {
    if (err) {
      res.send(err).status(406);
    } else {
      res.send(shoe).status(200);
    }
  })
})

module.exports = app;