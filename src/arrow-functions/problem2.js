// Convert all the arrow functions to normal anonymous functions
// There should be no arrows by the end

let x = function (x){
  return x+1;
}

let y = function(x,y){
  return x+y;
}

let z = function (x){
  let y = (x * 7) % 2;
  return y * 2;
}

//npm test test/arrow-functions/problem2.js

module.exports = { x, y, z };