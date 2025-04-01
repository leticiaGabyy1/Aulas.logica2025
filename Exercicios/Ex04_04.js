const prompt = require('prompt-sync')();

let nota1 = Number (prompt('Digite a nota da 1º prova'));
let nota2 = Number (prompt('Digite a nota da 2º prova'));
let media = (nota1 + nota2) / 2;
console.log(`a media é ${media}`);
