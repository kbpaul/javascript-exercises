const fibonacci = function(number) {
    if(number < 0){
        return "OOPS";
    }
    // return 1 if number is 0 or 1
    if (number == 0 ){
        return 0;
    }

    if (number == 1 ){
        return 1;
    }

    let n1 = 1;
    let n2 = 1;
    let arr = [n1, n2];
    
    while(arr.length < number){
        const temp = n1 + n2;
        arr.push(temp);
        n1 = n2;
        n2 = temp;
    }

    return arr.pop();
};

// Do not edit below this line
module.exports = fibonacci;
