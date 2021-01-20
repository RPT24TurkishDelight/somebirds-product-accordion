const mongoose = require('mongoose');
//const mongoUri = 'mongodb://localhost/somebirds';
const mongoUri = 'mongodb://localhost/somebirds';

const db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;

//comment to add file to PR