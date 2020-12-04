const mongoose = require('mongoose');
const db = require('./index.js');

const shoeSchema = new mongoose.Schema({
  modelId: { type: Number, unique: true },
  gender: { type: String, enum: ["men's", "women's"] },
  name: String,
  price: Number,
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

//comment to add file to PR