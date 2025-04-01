const prompt = require('prompt-sync')();
let largura = Number(prompt('qual é a largura'));
let altura = Number(prompt('qual é a altura?'));
let area = altura*largura;
let tinta = area / 2
console.log(`a largura é ${largura} a altura é ${altura} a area é de ${area} e a tinta é ${tinta}`);
