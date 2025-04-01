const prompt = require('prompt-sync')();
let num1 = Number (prompt('qual o numero?'));
let num2 = Number (prompt('qual o numero?'));
if (num1==num2){
    console.log('os numeros são iguais');

} else {
    console.log('os numeros são diferentes');
    
}