// load Unit.js module
var test = require('unit.js');
// just for example of tested value
var example = 555;
// assert that example variable is a string
test.number(example);
// or with Must.js
test.must(example).be.a.number();
// or with assert
test.assert(typeof example === 'number');
