const { update } = require('lodash');
const mongoose = require('mongoose');
const Shoe = require('../database/Product.js').shoe;

const getShoeData = (modelId, cb) => {
  Shoe.find({modelId: modelId}, function(err, doc) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, doc);
    }
  });
}

const createShoeData = (data, cb) => {
  data.modelId = parseInt(data.modelId);
  try {
    data.coreFeatures = JSON.parse(data.coreFeatures);
  } catch {

  }
  Shoe.create(data, (err, shoe) => {
    if (err) {
      cb (err, null);
    } else {
      cb (null, shoe);
    }
  })
}

const updateShoeData = (data, cb) => {
  data.modelId = parseInt(data.modelId);
  try {
    data.coreFeatures = JSON.parse(data.coreFeatures);
  } catch {

  }
  data.price = parseInt(data.price);
  Shoe.updateOne({modelId: data.modelId}, data, (err, shoe) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, shoe);
    }
  })
}

const deleteShoeData = (data, cb) => {
  data.modelId = parseInt(data.modelId);
  Shoe.deleteOne({modelId: data.modelId}, (err, shoe) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, shoe);
    }
  })
}

module.exports.getShoeData = getShoeData;
module.exports.createShoeData = createShoeData;
module.exports.updateShoeData = updateShoeData;
module.exports.deleteShoeData = deleteShoeData;