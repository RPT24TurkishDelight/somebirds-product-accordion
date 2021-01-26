const gen = require ('./sdcSeed');
const axios = require('axios');
const { recordCreator, recordInserter } = require('./sdcSeed');

//axios.defaults.headers.common['header1'] =
var array = [];
recordInserter(10, array.push.bind(array));

var user = 'admin';
var pass = 'rpt24'

axios.post(`${user}:${pass}@localhost:5984/shoes/_bulk_docs`, {
  docs: array
}, {
  auth: {
    username: user,
    password: pass
  }
})
.then ((x)=> {
  console.log(x.data);
})
.catch((err) => {
    if (err.response.data.reason = 'Database does not exist.') {
      axios.put(`${user}:${pass}@localhost:5984/shoes`,{}, {
        auth: {
          username: user,
          password: pass
        }
      })
      .then(() => {
        console.log('DB Created, retry');
      })
      .catch((err) => {
        console.log(err);
      })
    }
})