const { get } = require('lodash');
const { Client, Pool } = require('pg');
const {user, password} = require('./dblogin.js');

const pool = new Pool({
  host: '54.151.44.150',
  database: 'shoespost2',
  user: user,
  password: password
})

pool.connect();

const CRUD = {
  getShoeData: (id, cb) => {
     pool.query(`select * from shoes s where s.id = ${id} limit 1;`, (err, result) => {
      if (err) {
        cb(err)
      } else {
        cb(null, result);
      }
    })
  },
  updateShoeData: ( id, data, cb) => {
    var features = data.features.replace(/"/g,'\'').replace(/ /g,'');
    pool.query(`update shoes set gender = '${data.gender}', name = '${data.name}', price = ${data.price}, description = '${data.description}', features = ARRAY${features} where id = ${id};`, (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, result);
      }
    })
  },
  createShoeData: (data, cb) => {
    pool.query(`insert into shoes (gender, name, price, description, features) VALUES ('${data.gender}', '${data.name}', ${data.price}, '${data.description}', ARRAY${data.features})`, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, true);
      }
    });
  },
  deleteShoeData: (id, cb) => {
    pool.query(`delete from shoes where id =${id}`, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    })
  }
};

module.exports = CRUD;

//CRUD.put(1, {gender: 'Female', name : 'Air Force One', price: 100});