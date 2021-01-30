const { Client, Pool } = require('pg')
const {recordInserter, recordCreator} = require('./sdcSeed');
// const client = new Client({
//   database: 'shoes'
// })


//Insertion into JSON datatype
const pool = new Pool({
  database: 'shoes'
})

pool.connect()
console.time('insert');
( async () => {
  for (let i = 1; i <= 10000000; i++) {
    const a = JSON.stringify(recordCreator(i));
    await pool.query(`INSERT INTO shoes (data) VALUES ('${a}')`)
    if (i === 10000000) {
      console.timeEnd('insert');
      pool.end();
    }
  }
})();