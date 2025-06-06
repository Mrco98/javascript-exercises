const sumAll = function(num1, num2) {
    sum = 0;
    if (num1 < 0 || 
        num2 < 0 || 
        num1 % 1 != 0 || 
        num2 % 1 !=0 || 
        typeof num1 != 'number' ||
        typeof num2 != 'number') return 'ERROR';
    if (num1 > num2) {
        for (num2; num2 <= num1; num2++) {
            sum += num2;
        }
    } else {
        for (num1; num1 <= num2; num1++) {
            sum += num1;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
