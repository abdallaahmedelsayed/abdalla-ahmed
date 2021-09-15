let n1 = parseFloat(prompt('Enter first number: '));
let operator = prompt("Enter operator (+, -, * , / )");
let n2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = n1+n2;
}
else if (operator == '-') 
{
    result = n1-n2;
}
else if (operator == '*') 
{
    result = n1*n2;
}
else if (operator == '/') 
{
    result = n1 / n2;
}
console.log("the Result = "+result);