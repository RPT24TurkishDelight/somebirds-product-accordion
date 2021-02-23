const { Client, Pool } = require('pg')
const {recordInserter, recordCreator} = require('./sdcSeed');

//Insertion into JSONB datatype
const pool = new Pool({
  database: 'shoespost3'
})

pool.connect()

const seed = async (count, cb) => {
  console.time('insert');
  for (let i = 1; i < count + 1; i+= 1000) {
    var insert = 'INSERT INTO shoes (data) VALUES ';
    for (let j = i ; j < i+1000; j++) {
      const a = recordCreator(j);
      insert += `('${JSON.stringify(a)}'),`;
    }
    await cb(insert.slice(0,-1)).catch((err) => console.log(err));
  }
  console.timeEnd('insert');
}

seed(10000000, pool.query.bind(pool));

