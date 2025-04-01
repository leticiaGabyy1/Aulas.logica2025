//Exercicio 'só aprendemos praticando'
const prompt = require('prompt-sync')();
// EX01-
let num = (prompt('digite um numero de 1 a 7:'));
switch (num) {
    case '1':
        console.log('domingo');
        break;
    case '2':
        console.log('segunda');
        break;
    case '3':
        console.log('terça');
        break;
    case '4':
        console.log('quarta');
        break;
    case '5':
        console.log('quinta');
        break;
    case '6':
        console.log('sexta');
        break;
    case '7':
        console.log('sabado');
    default:
        console.log(' digite um numero de 1 a 7 ');

}
//ex02-
let ano = Number(prompt('que ano você nasceu?'));
let anoAtual = Number(prompt('ano atual'))
let nasci = anoAtual - ano
if (nasci <= 10) {
    console.log('criança')
} else if (nasci >= 11 && nasci <= 17) {
    console.log('adolescente');
} else if (nasci >= 60) {
    console.log('idoso');
} else {
    console.log(' adulto');
}

//Ex03-
let mes = (prompt('digite um numero de 1 a 12:'));
switch (mes) {
    case '1':
        console.log('janeiro');
        break;
    case '2':
        console.log('fevereiro');
        break;
    case '3':
        console.log('março');
        break;
    case '4':
        console.log('abril');
        break;
    case '5':
        console.log('maio');
        break;
    case '6':
        console.log('junho');
        break;
    case '7':
        console.log('julho');
    case '8':
        console.log('agosto');
        break;
    case '9':
        console.log('setembro');
        break;
    case '10':
        console.log('outubro');
        break;
    case '11':
        console.log('novembro');
        break;
    case '12':
        console.log('dezembro');
    default:
        console.log(' mes do ano');

}
//Ex04-
let mes1 = (prompt('digite um mês:'));
if (mes1 == 'janeiro' || mes1 == 'março' || mes1 == 'maio' || mes1 == 'julho' || mes1 == 'agosto' || mes1 == 'outubro' || mes1 == 'dezembro') {
    console.log('Esse mês tem tem 31 dias');

} else if (mes1 == 'abril ' || mes1 == 'junho' || mes1 == 'setembro' || mes1 == 'novembro') {
    console.log('Esse mes tem 30 dias');

} else if (mes1 == 'fevereiro') {
    console.log('esse mes tem 28 dias ');
}

//ex05-
let nota1 = Number(prompt('Qual é a 1ª nota? '));
let nota2 = Number(prompt('Qual é a 2ª nota? '));
let media = (nota1 + nota2) / 2;
(`A média das notas ${nota1} e ${nota2} é de ${media}`);

if (media > 7) {
console.log('Foi aprovado');
} else if (media >= 5 && media <= 7) {
console.log('Está em recuperação');
} else if (media < 5) {
console.log('Foi reprovado');
}

//Ex06
let salario = Number(prompt('Digite o seu salário: '))
if (salario <= 2000) {
console.log(`Você ganhou com o aumento R$ ${salario * 12 / 100}`);
} else if (salario <= 4000) {
console.log(`Você ganhou com o aumento R$ ${salario * 10 / 100}`);
} else if (salario > 4000) {
console.log(`Você ganhou com o aumento R$ ${salario * 8 / 100}`);
}
