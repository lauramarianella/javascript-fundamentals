'use strict';
function whatsMyAgeAgain() {
  // if this is undefined, return 18
  // else, return this.age
  if(this === undefined) return 18;
  return this.age;
}

module.exports = whatsMyAgeAgain;


//npm test test/this/problem1.js