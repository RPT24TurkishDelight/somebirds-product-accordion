const { Client, Pool } = require('pg')
const {recordInserter, recordCreator} = require('./sdcSeed');
// const client = new Client({
//   database: 'shoes'
// })

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
    // .then((result) => {
    //   console.log('next');
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }
})()


// for (var i = 0; i < 1; i++) {
//   const a = recordCreator(i);
//   console.log(`(${JSON.stringify(a.coreFeatures)}, ${a.gender}, ${a.name}, ${a.price}, ${a.description});`);
//   pool.query(`INSERT INTO shoes (corefeatures, gender, name, price, description) VALUES
// (${JSON.stringify(a.coreFeatures)}, ${a.gender}, ${a.name}, ${a.price}, ${a.description});`)
// .then(res => {
//   console.log('user:', res.rows[0])
// })
// .catch((err) => {
//   console.log(err);
// });
// }


// for (var i = 0; i < 1; i++) {
//   const a = recordCreator(i);
//   console.log(`INSERT INTO shoes (corefeatures, gender, name, price, description) VALUES
//   (ARRAY ${JSON.stringify(a.coreFeatures)}, '${a.gender}', '${a.name}', ${a.price}, '${a.description}');`);
//   pool.query(`INSERT INTO shoes (corefeatures, gender, name, price, description) VALUES
//   (ARRAY['breakfast', 'consulting'], '${a.gender}', '${a.name}', ${a.price}, '${a.description}');`)
// .then(res => {
//   console.log('user:', res.rows[0])
// })
// .catch((err) => {
//   console.log(err);
// });
// }
// pool.query(`INSERT INTO shoes (corefeatures, gender, name, price, description) VALUES
// ('{ "lala": "UA502"}', 'Male', 'Aowei', 120, 'Comedy');`)
// .then(res => {
//   console.log('user:', res.rows[0])
// });


// (async () => {
//   console.log('starting async query')
//   const result = await pool.query('SELECT NOW()')
//   console.log('async query finished')
//   console.log('starting callback query')
//   pool.query('SELECT NOW()', (err, res) => {
//     console.log('callback query finished')
//   })
//   console.log('calling end')
//   await pool.end()
//   console.log('pool has drained')
// })()
// pool.query('SELECT * from company', (err, res) => {
//   console.log(err ? err.stack : res.rows[0]) // Hello World!
// });