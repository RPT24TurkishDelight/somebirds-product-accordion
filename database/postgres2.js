const { Client, Pool } = require('pg')
const {recordInserter, recordCreator} = require('./sdcSeed');
const {user, pass} = require('./dblogin.js');
//Traditional SQL database with insertions
const pool = new Pool({
  host: '3.101.39.213',
  database: 'shoespost2',
  user: user,
  pass: pass
}, (err, err2) => {
  console.log(err, err2)
})

pool.connect().catch((err) => {
  console.log(err);
})

// const seed = async (count, cb) => {
//   console.time('insert');
//   for (let i = 1; i < count + 1; i+= 1000) {
//     var insert = '';
//     for (let j = i ; j < i+1000; j++) {
//       const a = recordCreator(j);
//       insert += `INSERT INTO shoes (id, gender, name, price, description) VALUES (${j}, '${a.gender}', '${a.name}', ${a.price}, '${a.description}');`;
//       var features = 'INSERT INTO features(shoe_id, description) VALUES';
//       a.coreFeatures.forEach((feature) => {
//         features += `(${j}, '${feature}'),`
//       })
//       insert += features.slice(0,-1)+ '; ';
//     }
//     await cb(insert);
//     if ( i + 1000 >= count) {
//       console.timeEnd('insert');
//     }
//   }
// }


// var a = recordCreator(1);
// function arrayFormat(data) {
//   returnString = '{';
//   data.coreFeatures.forEach((feature) => {
//     returnString += `"${feature}", `
//   })
//   returnString = returnString.slice(0, -2);
//   returnString+= '}';
//   return returnString;
// }
// console.log(a);
// var x = arrayFormat(a);
// a = JSON.stringify(a.coreFeatures);
// console.log(`UPDATE shoes SET features = ARRAY['${a}'] where id = 1`);
// pool.query(`UPDATE shoes SET features = ARRAY['${a}'] where id = 1`,(err, result) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// } )

// pool.query('select * from shoes where id = 1', (err, result) => {
//   console.log(result);
// })

const seed = async (count, cb) => {
  console.time('insert');
  for (let i = 1; i < count + 1; i+= 1000) {
    var insert = '';
    for (let j = i ; j < i+1000; j++) {
      const a = recordCreator(j);
      var features = JSON.stringify(recordCreator(i).coreFeatures).replace(/"/g,'\'').replace(/ /g,'');
      insert += `INSERT INTO shoes (id, gender, name, price, description, features) VALUES (${j}, '${a.gender}', '${a.name}', ${a.price}, '${a.description}', ARRAY${features});`;
    }
    await cb(insert);
    if ( i + 1000 >= count) {
      console.timeEnd('insert');
    }
  }
}


// const update = async function () {
//   console.time('insert');
//   for (let i = 1; i <= 100; i++) {
//     var record = recordCreator(i);
//     var features = JSON.stringify(recordCreator(i).coreFeatures).replace(/"/g,'\'').replace(/ /g,'');
//     console.log(record);
//     //  console.log(i, 'here');
//     await pool.query(`UPDATE shoes SET features = ARRAY${record} where id = ${i}`)
//   }
//   console.timeEnd('insert');
// }

// update();
seed(10000000, pool.query.bind(pool));

