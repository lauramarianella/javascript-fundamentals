// Modify this code to use the shout function to print HELLO after 2 seconds (2000ms)
// print is a global function we added in the test file for this exercise. It works just like console.log, we added it for testing purposes




// There is no need to modify this function
function shout(x) {
  print(x.toUpperCase());
}

function callShout(){
  let x = "hello";
  shout(x);
}

setTimeout(callShout, 2000);

//npm test test/callbacks/problem1.js



// // There is no need to modify this function
// let x ="hello";
// function shout(x) {//redefining x, that's why it didn't work, does not find the x because it is other
//   print(x.toUpperCase());
// }

// setTimeout(shout, 2000);