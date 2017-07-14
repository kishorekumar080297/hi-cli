'use strict';

var assert = require('assert');
var isMersennePrime = require('./');

// Mersenne primes
it('should return true because 3 is mersenne prime', function () {
    assert.strictEqual(isMersennePrime(3), true);
});