const mongoose = require('mongoose');
const db = require('./index.js');
//mongoose.Promise = global.Promise;

const shoeSchema = new mongoose.Schema({
  modelId: { type: Number, unique: true },
  name: String,
  coreFeatures: [ { type: String } ],
  description: String
});

const highlightsSchema = new mongoose.Schema({
  modelId: Number,
  featureName: String,
  featurePurpose: String,
  description: String,
  imgUrl: String
});

const ShoeData = mongoose.model('Shoe', shoeSchema);
const HighlightData = mongoose.model('Highlight', highlightsSchema);

module.exports.shoe = ShoeData;
module.exports.highlight = HighlightData;