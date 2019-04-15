// fix all the errors.
function c(g, h) {
    let x = g(6);//8
    let y = h(8, 10);//18
    return [x, y];
}

function t() {
    return c( x =>  x + 2, (x,y) =>  x + y);
}

//npm test test/arrow-functions/problem1.js

module.exports = t