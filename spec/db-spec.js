"use strict";
const mongoose = require('mongoose');
const expect = require('chai').expect;
const seed = require('../database/seed.js');
const db = require('../database/index.js');
const Shoe = require('../database/Product.js').shoe;
const helpers = require('../database/helpers.js');


describe('Creating a database', function() {
  let fakeData;

  before(function() {
    fakeData = seed.dataGenerator();
  });

  after(function() {
    console.log('completed all tests');
  })



  describe('Seed testing', () => {

    it('should have correct data shape for generated data', function() {
      let allStrings = fakeData[0].coreFeatures.every((feature) => {
        return (typeof feature === 'string')
      });
      expect(fakeData[0].modelId).to.be.a('number');
      expect(fakeData[0].name).to.be.a('string');
      expect(allStrings).to.be.true;
      expect(fakeData[0].description).to.be.a('string');
    });

    it('should have at least 100 documents', function() {
      Shoe.count({}, (err, count) => {
        expect(count).to.equal(100);
      });
    });
  });

  describe('API Endpoints', () => {

    it('GET request to /shoes/:shoeName/summary returns correct data', () => {
      helpers.getShoeData('mens-wool-runners', (err, doc) => {
        if (err) {
          throw err;
        }
        expect(doc[0].modelId).to.equal(1);
        expect(doc[0].description).to.equal('Ethically made with ZQ Merino wool, our original sneaker is soft, moisture wicking, and ready for anything. ');
      })
    });
  });

});