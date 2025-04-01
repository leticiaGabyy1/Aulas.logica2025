const prompt = require('prompt-sync')();

let inicio = Number(prompt('digite o inicio'));
let fim =  Number(prompt('digite o fim'));
let passo =  Number(prompt('digite o passo'));

for (let x = inicio; x <= fim; x++ ) {
    let nrSecreto = Math.floor(Math.random() * 60) + 1;
    console.log(x);
   
}