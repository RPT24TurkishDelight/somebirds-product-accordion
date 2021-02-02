const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoes', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected');
});


const shoeSchema = mongoose.Schema({
  modelId: {
    type: Number,
    unique: true
  },
  coreFeatures: Array,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Non-Binary']
  },
  name: String,
  price: Number,
  description: String
})

const Shoe = mongoose.model('Shoe', shoeSchema);

Shoe.collection.drop((err, results) => {
  if (err) {
    console.log(err)
  } else {
    console.log(results);
  }
});

Shoe.collection.find({});



module.exports = Shoe;

// try {
//   Shoe.collection.drop();
// } catch (err) {
// } finally {
//   Shoe.collection.drop();
// }

// const af1 = new Shoe({coreFeatures: ['2 purrs', 'I need 2 purrs']});

// af1.save((err, shoe) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(shoe);
//   }
// })

// Shoe.find({coreFeatures: { $all: ['2 purrs']}}, (err, shoe) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(shoe);
//   }
// });