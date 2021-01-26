const request = require("supertest");
const app = require("../server.js");
const mongoose = require('mongoose');
const { expect } = require("chai");
const { recordCreator } = require("../database/sdcSeed");
// const time = {
//   setTimeout: function() {
//     return global.setTimeout.apply(global, arguments);
//   }
// }
// const sinon = require('sinon');
// //const jest = require('jest');
// sinon.stub(time, 'setTimeout');

jest.useFakeTimers();
Date.now = jest.fn(() => 1503187200000);

const mongoDB = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise;
    mongoose.connect(config.database[process.env.NODE_ENV]);
  },
  disconnect: done => {
    mongoose.disconnect(done);
  }
};

describe('Test the addLike method', () => {
  beforeAll(() => {
      mongoDB.connect();
  });

  afterAll((done) => {
      mongoDB.disconnect(done);
  });
});

describe('TestCRUD Operations', () => {
  test('It should respond to the GET method', () => {
    return request(app)
      .get('/products/20/summary')
      .then(response => {
        expect(response.statusCode).equal(200);
      })
  });
  test('It should respond to the Post method', () => {
    return request(app)
      .post('/products/create')
      .send({name: 'john', modelId: 1000})
      .then(response => {
        expect(response.statusCode).equal(200);
      })
  });
  test('It should respond to the PUT method', () => {
    return request(app)
      .put('/products/update')
      .send({modelId: 1000, name: 'john', coreFeatures: 'toilet'})
      .then(response => {
        console.log(response.error);
        expect(response.statusCode).toBe(200);
      })
  });
  test('It should respond to the DELETE method', () => {
    return request(app)
      .delete('/products/delete')
      .send({modelId: 1000})
      .then(response => {
        expect(response.statusCode).equal(200);
      })
  });

});

describe('Test DataGenerator', () => {
  const gen = require('../database/sdcSeed');
  var record = gen.recordCreator(1)
  test('It should have a core features array', () => {
    expect(Array.isArray(record.coreFeatures)).equal(true);
  })
  test('It should have a modelID of 1', () => {
    expect(record.modelId).equal(1);
  })
  test('It should contain gender name, price, description', () => {
    expect(record.gender).not.equal(undefined);
    expect(record.name).not.equal(undefined);
    expect(record.price).not.equal(undefined);
    expect(record.description).not.equal(undefined);
  })
  test('It should create 10 records', () => {
    const collection = [];
    //binding collection
    gen.recordInserter(10, collection.push.bind(collection));
    expect(collection.length).equal(10);
  })
})


