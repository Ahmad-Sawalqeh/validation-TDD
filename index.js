'use strict';

const validator = require('./src/validator.js');

// validator.isValid();

console.log(validator.isValid('am i a string', validator.isString));

console.log(validator.isValid([1,2,5,8,9], validator.isObject));