const prompt = require('prompt-sync')();
let dinheiro = Number(prompt('quanto de dinheiro tem na carteira?'));
let dolar = dinheiro*5.79;
console.log(`a quantidade de dinheiro que voce tem é $${dolar.toFixed(2)}`);
