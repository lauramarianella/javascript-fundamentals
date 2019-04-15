// Make parent the __proto__ of child

let parent = { x: 5, y: 6, z: 8 };
let child = { x: 10 };

child.__proto__ = parent;

//npm test test/__proto__/problem1.js

module.exports = { parent, child };
