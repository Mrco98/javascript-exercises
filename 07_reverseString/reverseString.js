const reverseString = function(string) {
    const stringArray = string.split("");
    const output = [];
    for (i=1; i <= stringArray.length; i++) {
        output[i-1] = stringArray[stringArray.length-i];
    }
    return output.join('');
};

// Do not edit below this line
module.exports = reverseString;
