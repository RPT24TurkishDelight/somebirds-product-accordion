const mongoose = require('mongoose');
//const mongoUri = 'mongodb://localhost/somebirds';
const mongoUri = 'mongodb://54.153.5.233/somebirds';

const db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;

//comment to add file to PR