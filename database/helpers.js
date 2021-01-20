const mongoose = require('mongoose');
const Shoe = require('../database/Product.js').shoe;

const getShoeData = (modelId, cb) => {
  Shoe.find({modelId: modelId}, function(err, doc) {
    if (err) {
      cb(err, null)
    } else {
      //console.log(doc);
      cb(null, doc);
    }
  });
}

const createShoeData = (data, cb) => {
  Shoe.create(data, (err, shoe) => {
    if (err) {
      cb (err, null);
    } else {
      cb (null, shoe);
    }
  })
}

module.exports.getShoeData = getShoeData;
module.exports.createShoeData = createShoeData;