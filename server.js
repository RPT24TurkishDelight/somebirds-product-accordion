// require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('./database/psql.js');
const port = 3002;
const cors = require('cors');
const axios = require('axios');
const redis = require("redis");
const redisPort = 6379
const client = redis.createClient(redisPort);
const app = express();

client.on("error", (err) => {
  console.log(err);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get('/products/:shoeId/summary', (req, res) => {
  const id = req.params.shoeId;
  try {
    client.get(id, async (err, jobs) => {
      if (err) throw err;

      if (jobs) {
        res.status(200).send(JSON.parse(jobs));
      } else {
        await helpers.getShoeData(id, (err, doc) => {
          if (err) {
            res.sendStatus(404);
          }
          client.setex(id, 600, JSON.stringify(doc.rows[0]));
          res.status(200).send(doc.rows[0]);
        });
      }
    })
  } catch (err) {
    res.status(404).send()
  }
  // helpers.getShoeData(id, (err, doc) => {
  //   if (err) {
  //     res.sendStatus(404);
  //   }
  //   res.status(200).send(doc.rows[0]);
  // });
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