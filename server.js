const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;
const app = express();

//put database in when ready to setup

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get('/products/:shoeId', (req, res) => {
  console.log('inside GET api');
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});