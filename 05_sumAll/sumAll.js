const sumAll = function(num1, num2) {
    if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0){
        return "ERROR";
    }

    let minValue = Math.min(num1,num2);
    let maxValue = Math.max(num1,num2);
    let sum = minValue;
    for(let i = minValue+1; i <= maxValue; i++){
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
