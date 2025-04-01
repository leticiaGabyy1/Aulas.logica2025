const prompt = require('prompt-sync')();

let num1 = Number (prompt('digite o numero?'));
if(num1 % 2 == 0){
    console.log('positivo');
    
} else {
    console.log('negativo');
    
}