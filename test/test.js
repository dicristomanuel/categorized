var assert = require("chai").assert;
var cluster = require("../src/index");
var terms = cluster.amphibian;
var toReg = cluster.toReg;

describe('main', function() {
  it('should contain an array and a function', function() {
    assert.isArray(terms);
    assert.isFunction(toReg);
  });
});

describe('toReg', function() {
  it('returns a usable string for regex', function() {
    assert.isString(toReg(terms));
    assert.include(toReg(terms), '|')
  });
});
