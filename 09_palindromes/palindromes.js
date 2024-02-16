const palindromes = function (str) {
    const string = str.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reverseString = [...string].reverse().join('');
    return string === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
