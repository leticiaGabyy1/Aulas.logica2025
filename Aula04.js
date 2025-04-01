const prompt = require('prompt-sync')();
//Criando nossa primeira variavel 
//Uma variavel serve para armazenar uma informação/Valor
//O memória crie um espaço com o nome curso e receba o valor 'desenvolvimento de sistemas 
var curso ='Desenvolvimento de Sistemas';

console.log('curso');  //Para imprimir uma variável, não se coloca entre ""
console.log(curso);   //Jeito correto de usar uma variável
console.log('curso', curso);

var idade = 16;     //Inteira  // Integer
var temperatura = 24.5;  //Real // float 
var nome = 'Leticia';  //string

console.log('Olá,', nome, ' você tem', idade,'anos')
console.log('está cursando', curso, 'hoje faz', temperatura, 'ºC');

console.log('Olá,' + nome + ' você tem' + idade +'anos')
console.log('está cursando' + curso + 'hoje faz' + temperatura + 'ºC');

//template String
//Utilizo a crase ` ` para criar uma string
//Para colocar variáveis dentro da string, utilizo %{variável}
console.log(`Olá, ${nome} você tem ${idade} anos 
             está cursando ${curso} hoje faz ${temperatura}ºC`)

 //Declarando uma variável lógica/boolean/boleano (true/false)
var podeDirigir = true;
var estaChovendo = false;

//Declarando uma variável nula
//sempre começar com letra ou _
//var escola;

//Exercicio:
//Nota1 -valido
//nomeCompleto -valido
//Nome completo -invalido
//média -invalido
//console -invalido
//_salario -valido
//9dade -invalido
//Minha_Variavel -valido 
//var -invalido
//Valor$ -invalido
//nome-completo -invalido
//escola_ -valido
//TELEFONE -valido
//true -invalido

let cidade ='Andradina'
var turma = '2ºB'
const ano = 2025

console.log(turma);
turma = '3ºB'  //Reatribuindo o valor de uma variavel
console.log(turma);
//ano = 2026 //Não podemos reatribuir valor a uma constante

let _nome = 'Leticia';
let _idade = 16;
let _peso = 62.5;
console.log(_nome, _idade, _peso);

console.log(typeof _nome, typeof _idade, typeof _peso);


//No prompt o computador espera o usuario digitar uma imformação
//sempre quando recebemos uma imformação de entrada ela vem em STRING   
_nome = prompt('qual o nome?');
_idade = prompt('qual é a idade?');
_peso = prompt('qual é o peso?');
console.log(_nome,_idade,_peso);

console.log(typeof _nome, typeof _idade, typeof _peso);

//criem 2 variaveis num1 e num2 e recebam as informações pelo prompt

let num1 = prompt('digite o primeiro nº:')
let num2 = prompt('digite o segundo nº:')
console.log(num1 + num2);

console.log(typeof num1); //string
num1 = Number(num1);     //Convertendo a variável do tipo string para Number
console.log(typeof num1); // number

let nr1 = Number(prompt('digite o primeiro nº:'));
let nr2 = Number(prompt('digite o segundo nº:'));
console.log(nr1 + nr2);

//Convertendo os dados de uma variável
nr1 = "100.14"; //string
nr1 = Number("100.14"); //Convertendo uma string para o Number 
nr1 = parseInt("100.14");  //Convertendo string para integer
nr1 = parseFloat("100");  //Convertendo string para float 100.00
nr1 = String(100.14);  //convertendo um Number para string

_nome = prompt('qual o nome?'); //string
_idade = parseInt(prompt('qual é a idade?')); //int
_peso = parseFloat(prompt('qual é o peso?'));  //float
console.log(_nome,_idade,_peso);

//Exercicios Variáveis

let nomeAluno = prompt('qual seu nome?')
let altura = prompt('qual sua altura?')
let escola = prompt('onde você estuda?')
let anoAtual = prompt('em que ano você esta?')
console.log(nomeAluno + altura + escola + anoAtual);

let nomeProfessor = prompt('douglas')
let materia = prompt('senai-TI')
let anoIngresso = prompt('2023')
console.log(douglas + senai-TI + 2023);

_nomeAluno = prompt('qual seu nome?');
_altura = parseFloat(prompt('qual sua altura?'));
_escola = prompt('onde você estuda?');
_anoAtual = parseInt(prompt('em que ano você esta?'));
console.log(nomeAluno + altura + escola + anoAtual );

_nomeProfessor = prompt('douglas');
_materia = prompt(senai);
_anoIngresso = parseInt(prompt('2023'));
console.log(douglas + senai + 2023);










