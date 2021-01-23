const { slice } = require("lodash");

const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 2,
    min: 1
  }
})

lorem.generateWords(1);

const random = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min)
}

const recordCreator = (id) => {
 const returnObject = {
   coreFeatures: lorem.generateSentences(random(1,3)).split('.').slice(0,-1),
   modelId: id,
   gender: ['Male', 'Female', 'Non-Binary'][random(0,2)],
   name: lorem.generateWords(1),
   price: random(30, 200),
   description: lorem.generateSentences(random(10, 20)),
 };
 return returnObject;
}

const recordInserter = (count, cb) => {
  for (var i = 1; i <= count; i++) {
    cb(recordCreator(i));
  }
}

//recordInserter(100, console.log);
module.exports = {
  recordCreator: recordCreator,
  recordInserter: recordInserter
}