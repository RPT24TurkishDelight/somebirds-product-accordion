const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/somebirds';

const db = mongoose.connect(mongoUri, {useMongoClient: true, useNewUrlParser: true });

module.exports = db;