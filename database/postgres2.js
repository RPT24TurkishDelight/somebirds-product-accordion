const { Client, Pool } = require('pg')
const {recordInserter, recordCreator} = require('./sdcSeed');


const pool = new Pool({
  database: 'shoespost2'
})

pool.connect()


// ( async () => {
//   console.time('insert');
//   for (let i = 1; i <= 10; i++) {
//     const a = JSON.stringify(recordCreator(i));
//     await pool.query(`INSERT INTO shoes (data) VALUES ('${a}')`)
//     if (i === 10) {
//       console.timeEnd('insert');
//       pool.end();
//     }
//   }
// })()

// const seed = async (count, cb) => {
//   console.time('insert');
//   for (let i = 1; i <= count; i++) {
//     const a = recordCreator(i)
//     var features = 'INSERT INTO features(shoe_id, description) VALUES';
//     await cb(`INSERT INTO shoes (id, gender, name, price, description) VALUES (${i}, '${a.gender}', '${a.name}', ${a.price}, '${a.description}');`);
//     a.coreFeatures.forEach((feature) => {
//       features += `(${i}, '${feature}'),`
//     })
//     await cb(features.slice(0,-1));
//     if (i >= count) {
//       console.timeEnd('insert');
//     }
//   }
// }

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

