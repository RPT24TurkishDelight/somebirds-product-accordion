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


const nameGenerator = () => {
  return lorem.generateWords(1);
}

const dataGenerator = () => {
  let sampleData = [{
    modelId: 1,
    gender: "men's",
    name: 'wool runners',
    price: 125,
    coreFeatures: ['Renewable Materials','Machine Washable','Minimizes Odor','Flexibly Conforms To Your Movements'],
    description: 'Ethically made with ZQ Merino wool, our original sneaker is soft, moisture wicking, and ready for anything. '
  },
  {
    modelId: 9999999,
    gender: 'men',
    name: 'tree dashers',
    price: 120,
    coreFeatures: ['Renewable Materials','Machine Washable','Aerodynamic','Flexibly Conforms To Your Movements'],
    description: 'Our most technical shoe yet, the Tree Dasher reimagines the traditional running shoe with natural materials engineered for serious performance. - Heel Drop: 7mm (Forefoot: 15.5mm, Heel: 22.5mm) - Type: Neutral, Cushioned, Light Stability Running Shoe'
  }];

  const genderGenerator = () => {
    let choice = Math.round(Math.random());
    return (choice === 1) ? "men's" : "women's"
  }

  for (let i = 3; i <= 100; i++) {

    sampleData.push({
      modelId: i,
      gender: genderGenerator(),
      name: nameGenerator() + i,
      price: Math.floor(Math.random() * (125 - 90) + 90),
      coreFeatures: [lorem.generateWords(2), lorem.generateWords(3), lorem.generateWords(2), lorem.generateWords(3)],
      description: lorem.generateParagraphs(1)
    });
  }
  return sampleData;
}

const insertSampleData = (sampleData) => {
  Shoe.create(sampleData)
  .then(() => console.log('Finished adding sample data.'))
}


const data = dataGenerator();
insertSampleData(data);

module.exports.dataGenerator = dataGenerator;
module.exports.insertSampleData = insertSampleData;

//comment to add file to PR
