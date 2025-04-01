const prompt = require('prompt-sync')();
let produto = Number(prompt('qual é o valor ?'));
let desconto = 5/100;
let valorFinal = produto - desconto;
console.log(`o novo preço é ${valorFinal} o desconto é ${desconto}` );
