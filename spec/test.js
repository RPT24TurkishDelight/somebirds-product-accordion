const request = require("supertest");
const app = require("../server.js");
const mongoose = require('mongoose');
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

// describe('TestCRUD Operations', () => {
//   test('It should respond to the GET method', () => {
//     return request(app)
//       .get('/products/20/summary')
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//       })
//   });
// });

describe('TestCRUD Operations', () => {
  test('It should respond to the GET method', () => {
    return request(app)
      .get('/products/20/summary')
      .then(response => {
        expect(response.statusCode).toBe(200);
      })
  });
  test('It should respond to the Post method', () => {
    return request(app)
      .post('/products/create')
      .send({name: 'john', modelId: 1000})
      .then(response => {
        expect(response.statusCode).toBe(200);
      })
  });
  test('It should respond to the PUT method', () => {
    return request(app)
      .put('/products/update')
      .send({modelId: 1000, name: 'john'})
      .then(response => {
        expect(response.statusCode).toBe(200);
      })
  });
  test('It should respond to the DELETE method', () => {
    return request(app)
      .delete('/products/delete')
      .send({modelId: 1000, name: 'john'})
      .then(response => {
        expect(response.statusCode).toBe(200);
      })
  });

});


