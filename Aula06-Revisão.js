//Importando biblioteca para receber informação do usuário

const prompt = require('prompt-sync')();

//Declarado variável sem dados ( undefined )
let nota;
//Declarando variável com informação 
let nome= "Carlos";

//Retribuindo um valor á variavel nome
nome = "Roberto"
nota = 8.5;

let sobrenome = prompt('Digite seu sobrenome:');
let nota1 = Number (prompt('Digite a nota da 1º prova'));
let nota2 = Number (prompt('Digite a nota da 2º prova'));

//Processamento dos dados 
let media = (nota1 + nota2) / 2;
let nomeCompleto = nome + '' + sobrenome;
let nomecompleto2 = `${nome} ${sobrenome}`;
let idade = prompt('digite sua idade:');
let idadeNumero = parseInt(idade);

//Saida dos dados 
console.log('---Relatorio Final---');
console.log(`O seu nome é: ${nomeCompleto} + \n sua idade ${idade}`);
console.log('o seu nome é:'  + nomecompleto +'\n sua idade' + idade);
console.log(`sua media é: ${media}`);

let n = 0;          //0
n = 0 + 1;         //1 
n = n + 1         //2
n = n + 1;       //3
n += 1;         //4
n++;           //5
n += 3;       //8
n--;         //7
n = n - 1;  //6
n -= 2;    //4

//Resolução do exercicio da aula anterior 
let horasPorDia = Number(prompt('Quantas horas trabalhou por dia?'));
let diasTrabalhados = Number(prompt('Quantos dias trabalhou?'));
let valorHora = Number(prompt('Qual é o valor da hora?'));
let totalHoras = diasTrabalhados * horasPorDia;
let custoTotal = totalHoras * valorHora;
console.log(`O custo total é de R$ ${custoTotal}`);

