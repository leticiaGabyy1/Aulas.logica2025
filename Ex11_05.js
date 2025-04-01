const prompt = require('prompt-sync')();

let somaIdadeM = 0;
let quantidadeM = 0;
let somaIdadeF = 0;
let quantidadeF = 0;

for (let x = 1; x <= 10; x++) {
    let idade =Number(prompt('digite sua idade'));
    let sexo =prompt('digite seu sexo (m/f');
    quantidadeM++;
    quantidadeF++;

    if (sexo == 'm') {
        quantidadeM++;
        somaIdadeM = somaIdadeM + idade;
    } else if (sexo == 'f') {
        quantidadeF++;
        somaIdadeF = somaIdadeF + idade;
    }
}
console.log(` a média dos sexos M é de ${somaIdadeM / quantidadeM}`);
console.log(` a média dos sexos F é de ${somaIdadeF/quantidadeF}`);
console.log(` a média dos grupos é de ${(somaIdadeF + somaIdadeM) / 10}`);