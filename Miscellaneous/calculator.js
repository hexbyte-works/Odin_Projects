const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b;
};

const divide = function(a,b) {
	return a/b;
};

const multiply = function(a,b) {
    return a*b;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	if(a==1 || a==0){
        return 1;
    }
    else{
        return a*factorial(a-1);
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  divide,
  multiply,
  power,
  factorial
};