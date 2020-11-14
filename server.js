const express = require('express');
const bodyParser = require('body-parser');
const port = 3002;
const app = express();
const helpers = require('./database/helpers.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get('/products/:shoeName', (req, res) => {
  console.log('inside GET api');
  console.log(req.params.shoeName);

  helpers.getShoeData(req.params.shoeName, (err, doc) => {
    if (err) {
      res.sendStatus(404);
    }
    res.send(doc[0]);
  });
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});