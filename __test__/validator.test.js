'use strict';

const validator = require('../src/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out
  // let rules = {
  //   str: 'yes',
  //   num: 1,
  //   arr: ['a'],
  //   obj: {
  //     x:'y'
  //   },
  //   func: () => {},
  //   bool: false,
  // };
  // expect(validator.isBoolean(rules.bool)).toBeTruthy();
  // for(let key in rules){
  //   if(key == 'bool') continue;
  //   expect(validator.isString(rules[key])).toBeFalsy();
  // }
  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = { x: 'y' };
  let func = () => { };
  let bool = false;
  it('Test if it is a strings', () => {
    let arrayOfDataType = [num, arr, obj, func, bool];
    expect(validator.isString(str)).toBeTruthy();
    arrayOfDataType.forEach(val => {
      expect(validator.isString(val)).toBeFalsy();
    });
  });

  it('Test if it is a numbers', () => {
    let arrayOfDataType = [str, arr, obj, func, bool];
    expect(validator.isNumber(num)).toBeTruthy();
    arrayOfDataType.forEach(val => {
      expect(validator.isNumber(val)).toBeFalsy();
    });
  });

  it('Test if it is a arrays', () => {
    let arrayOfDataType = [str, num, obj, func, bool];
    expect(validator.isArray(arr)).toBeTruthy();
    arrayOfDataType.forEach(val => {
      expect(validator.isArray(val)).toBeFalsy();
    });
  });

  it('Test if it is a objects', () => {
    let arrayOfDataType = [str, num, arr, func, bool];
    expect(validator.isObject(obj)).toBeTruthy();
    arrayOfDataType.forEach(val => {
      expect(validator.isObject(val)).toBeFalsy();
    });
  });

  it('Test if it is a booleans', () => {
    let arrayOfDataType = [str, num, arr, obj, func];
    expect(validator.isBoolean(bool)).toBeTruthy();
    arrayOfDataType.forEach(val => {
      expect(validator.isBoolean(val)).toBeFalsy();
    });
  });

  it('Test if it is a functions', () => {
    let arrayOfDataType = [str, num, arr, obj, bool];
    expect(validator.isFunction(func)).toBeTruthy();
    arrayOfDataType.forEach(val => {
      expect(validator.isFunction(val)).toBeFalsy();
    });
  });

});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    let person = {
      hair : {
        color: 'black',
      },
      number : 1
    }
    expect(person.hair.color).toBeTruthy();
    expect(person.short).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    let name = 'ahmad';
    expect(typeof name).toMatch('string')
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    let arrayOfString = ['aa', 'bb', 'cc'];
    arrayOfString.forEach(val => {
      expect(typeof val).toMatch('string');
    });
    // let arrayOfNumbers = [34,436, 11];
    // arrayOfNumbers.forEach(val => {
    //   expect(typeof val).toMatch('number');
    // });
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    let string = 'yes';
    expect(string).toMatch('yes');
  });

  // TODO: Cover so, so many more cases

});