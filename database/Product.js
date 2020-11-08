const mongoose = require('mongoose');
//const db = require('./index.js);

const shoeSchema = new mongoose.Schema({
  modelId: Number, //maybe string???
  name: String,
  coreFeatures: String,
  description: String
});

const highlightsSchema = new mongoose.Schema({
  modelId: Number,
  featureName: String,
  featurePurpose: String,
  description: String,
  imgUrl: String
})

const ShoeData = mongoose.model('Shoe', shoeSchema);
const HighlightData = mongoose.model('Highlight', highlightsSchema);

module.exports.shoe