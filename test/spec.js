/*jshint node:true, mocha:true */

'use strict';

require('should');

var every2 = require('../src/every2');
var fixtures = require('../fixtures/callbacks');

describe('every2', function() {
  it('should execute test for every 2 consecutive elements', function() {
    every2([1, 5, 10], fixtures.isAscendingPair).should.be.true;
    every2([1, 7, 3], fixtures.isAscendingPair).should.be.false;
  });

  it('should return true when array is shorter than n', function() {
    every2([1], fixtures.noop).should.be.true;
    every2([], fixtures.noop).should.be.true;
  });

  it('should pass index and array to the callback', function() {
    every2([0, 1, 1, 2, 3, 5, 8, 13], fixtures.isFibonacciTripleWith2).should.be.true;
    every2([4, 7, 11, 18, 29], fixtures.isFibonacciTripleWith2).should.be.true;
    every2([0, 1, 1, 2, 3, 6, 8, 13], fixtures.isFibonacciTripleWith2).should.be.false;
  });

  it('should execute the callback with the provided thisArg as this', function() {
    every2([9, 3], fixtures.isSqrt, Math).should.be.true;
  });
});
