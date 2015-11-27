/*jshint node:true, mocha:true */

'use strict';

require('should');

var every2 = require('../src/every2');
var fixtures = require('../fixtures/callbacks');

describe('every2', function() {
  it('should execute test for every 2 consecutive elements', function() {
    every2(fixtures.isAscendingPair, [1, 5, 10]).should.be.exactly(true);
    every2(fixtures.isAscendingPair, [1, 7, 3]).should.be.exactly(false);
  });

  it('should return true when array is shorter than n', function() {
    every2(fixtures.noop, [1]).should.be.exactly(true);
    every2(fixtures.noop, []).should.be.exactly(true);
  });

  it('should pass index and array to the callback', function() {
    every2(fixtures.isFibonacciTripleWith2, [0, 1, 1, 2, 3, 5, 8, 13]).should.be.exactly(true);
    every2(fixtures.isFibonacciTripleWith2, [4, 7, 11, 18, 29]).should.be.exactly(true);
    every2(fixtures.isFibonacciTripleWith2, [0, 1, 1, 2, 3, 6, 8, 13]).should.be.exactly(false);
  });

  it('should execute the callback with the provided thisArg as this', function() {
    (function() {
      every2(fixtures.isSqrt, [9, 3]);
    }).should.throw();

    every2(fixtures.isSqrt, [9, 3], Math).should.be.exactly(true);

    // alternative
    every2(fixtures.isSqrt.bind(Math), [9, 3]).should.be.exactly(true);
  });
});
