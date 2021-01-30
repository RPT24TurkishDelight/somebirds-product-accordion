const { Client, Pool } = require('pg')
const {recordInserter, recordCreator} = require('./sdcSeed');

//Traditional SQL database with insertions
const pool = new Pool({
  database: 'shoespost2'
})

pool.connect()

const seed = async (count, cb) => {
  console.time('insert');
  for (let i = 1; i < count + 1; i+= 1000) {
    var insert = '';
    for (let j = i ; j < i+1000; j++) {
      const a = recordCreator(j);
      insert += `INSERT INTO shoes (id, gender, name, price, description) VALUES (${j}, '${a.gender}', '${a.name}', ${a.price}, '${a.description}');`;
      var features = 'INSERT INTO features(shoe_id, description) VALUES';
      a.coreFeatures.forEach((feature) => {
        features += `(${j}, '${feature}'),`
      })
      insert += features.slice(0,-1)+ '; ';
    }
    await cb(insert);
    if ( i + 1000 >= count) {
      console.timeEnd('insert');
    }
  }
}

seed(10000000, pool.query.bind(pool));

