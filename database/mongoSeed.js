const shoe = require('./mongoSchema');
const {recordCreator} = require('./sdcSeed');

const seed = async (count, cb) => {
  console.time('insert');
  for (let i = 1; i < count + 1; i+= 1000) {
    const insert = [];
    for (let j = i ; j < i+1000; j++) {
      insert.push(recordCreator(j));
    }
    await cb(insert).catch((err) => console.log(err));
  }
  console.timeEnd('insert');
}

seed(10000000, shoe.insertMany.bind(shoe));