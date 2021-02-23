const { get } = require('lodash');
const { Client, Pool } = require('pg');

const pool = new Pool({
  database: 'shoespost2'
})

pool.connect();

const CRUD = {
  getShoeData: (id, cb) => {
     pool.query(`select * from shoes s where s.id = ${id};`, (err, result) => {
      if (err) {
        cb(err)
      } else {
        cb(null, result);
      }
    })
  },
  createShoeData: (id, data, cb) => {
    pool.query(`update shoes set gender = '${data.gender}', name = '${data.name}', price = ${data.price}, features = ARRAY${JSON.stringify(data.features)} where id = ${id};`, (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, result);
      }
    })
  }
};

module.exports = CRUD;

//CRUD.put(1, {gender: 'Female', name : 'Air Force One', price: 100});