const prompt = require('prompt-sync')();
let num1 = Number (prompt('digite o primeiro numero?'));
if(num1 % 2 == 0){
    console.log('par');
    
} else {
    console.log('impar');
    
}