exports.add = add;
exports.multiply = multiply;
exports.factorial = factorial;
exports.now = Date.now();
function add(num1,num2){
    return (num1+num2);
;}
function multiply(num1,num2){
    return (num1*num2);
;}
function factorial(number){
    if(number === 0){
        return 1;
    }
    else{
        return number * factorial(number-1)
    }
;}