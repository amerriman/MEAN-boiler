process.env.NODE_ENV = 'test';

var chai = require('chai');
// var mocha = require('mocha');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');
var server = require('../src/server/app.js');

var Thing = require('../src/server/models/thing');

var should = chai.should();
chai.use(chaiHttp);


describe('Thing', function(){

  Thing.collection.drop();

  beforeEach(function(done){
    var newThing = new Thing({

    });
    newThing.save(function(err) {
      done();
    });
  });

  afterEach(function(done){
    Thing.collection.drop();
    done();
  });

//add assertions below


});
