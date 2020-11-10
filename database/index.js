const mongoose = require('mongoose');
const mongoUri = 'mongo://localhost/somebirds';

const db = mongoose.connect(mongoUri, {useMongoClient: true});

module.exports = db;