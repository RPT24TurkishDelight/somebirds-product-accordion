const db = require('./index.js');
const schemas = require('./Product.js');
const Shoe = schemas.shoe;
const Highlight = schemas.highlight;
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 3,
    min: 3
  },
  wordsPerSentence: {
    max: 10,
    min: 8
  }
});

const sampleData = [{
  modelId: 1,
  name: 'mens-wool-runners',
  coreFeatures: ['Renewable Materials','Machine Washable','Minimizes Odor','Flexibly Conforms To Your Movements'],
  description: 'Ethically made with ZQ Merino wool, our original sneaker is soft, moisture wicking, and ready for anything. '
}];

const nameGenerator = () => {
  return lorem.generateWords(1);
}

for (let i = 2; i <= 100; i++) {
  sampleData.push({
    modelId: i,
    name: nameGenerator(),
    coreFeatures: [lorem.generateWords(2), lorem.generateWords(3), lorem.generateWords(2), lorem.generateWords(3)],
    description: lorem.generateParagraphs(1)
  });
}

console.log(sampleData);

const insertSampleData = () => {
  Shoe.create(sampleData)
    .then(() => console.log('Finished adding sample data.'))
}

insertSampleData();
