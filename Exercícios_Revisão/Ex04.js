const prompt = require('prompt-sync')();

let horasTrabalhadas=Number(prompt('quanto vc ganha no mês? '));
let horasGanhas=Number(prompt('quanto vc ganha por hora? '));
let Total= horasTrabalhadas*horasGanhas
console.log(`o total de seu salario é R$ ${Total}`);
