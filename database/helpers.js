const mongoose = require('mongoose');
//const db = require('./index.js');
const Shoe = require('../database/Product.js').shoe;

const getShoeData = (shoeName, cb) => {
  Shoe.find({name: shoeName}, function(err, doc) {
    if (err) {
      cb(err, null)
    } else {
      console.log(doc);
      cb(null, doc);
    }
  });
}

module.exports.getShoeData = getShoeData;