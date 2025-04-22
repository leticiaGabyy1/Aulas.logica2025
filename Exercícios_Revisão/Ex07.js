const prompt = require('prompt-sync')();

let ganhosPorHora = Number(prompt('quando você ganha por hora? '));
let nmrHorasTrabalhadas = Number(prompt('quantas horas trabalhadas? '));
let salarioBruto= ganhosPorHora*nmrHorasTrabalhadas;
let IR = salarioBruto*11/100
let INSS= salarioBruto*8/100
let sindicato = salarioBruto*5/100
let salarioLiquido = salarioBruto - IR - INSS - sindicato;
console.log(`o desconto do inss é ${INSS}`);
console.log(`o desconto do ir é ${IR}`);
console.log(`o desconto do sindicato é ${sindicato}`);
console.log(`O Salário líquido é ${salarioLiquido}`);







