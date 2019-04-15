// Remove the conditional operator from these functions
// USE IF STATEMENTS

function iLike(x) {
  if(x === 'chinese food') return true;
  return false;
}

function iLikeLessPicky(x) {
  if(x === 'chinese food'){
    return true;
  }else if(x === 'french food'){
    return true;
  }else{
    return false;
  }
}

module.exports = { iLike, iLikeLessPicky };

//npm test test/conditional-operator/problem2.js