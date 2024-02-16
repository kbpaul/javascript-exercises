const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => array.reduce((total, curr) => total + curr, 0);


const multiply = (array) => array.reduce((total, curr) => total * curr);

const power = (a, b) => a**b;

const factorial = function(number) {
  const arrNum = Array.from(Array(number).keys()).map(x => x+1);
  return arrNum.reduce((total, curr)=>total*curr, 1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
