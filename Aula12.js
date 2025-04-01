const prompt = require('prompt-sync')();
//variaveis compostas / vetores / arrays

//variaveis simples; cabe apenas 1 dado por vez
let fruta = 'maça';
fruta = 'banana';

//variavel composta, cabe mais de 1 dado
let frutas = ['maçã' , 'banana', 'abacaxi' , 'uva'];

console.log(frutas);
console.log(frutas[1]);

//declarando uma lista vazia
let listaVazia = [];

//declaração de uma lista de números
let numeros = [1, 2, 8, 5, 9];

//declaração de uma lista de strings
let nomes = ['ana', 'joão', 'maria'];

//declaração de uma lista mista
let listaMista = [4, 'feijão', true, 7.55];

//declaração de uma lista com outras listas 
let listaDeVetores = [['coca-cola', 'hot-dog'],[ 5.00, 10.00]];
console.log(listaDeVetores [0][1]);

console.log(frutas);
//alterando o conteúdo de um item da lista
frutas[3] = 'melancia'
console.log(frutas);

//inserindo um novo item na lista 
frutas.push('laranja');
frutas = [...frutas, 'laranja']; //utilizando o operador spread

//inserindo um novo item em posição especifica
frutas.splice (2, 0, 'morango');
// 2 -posição
// 0-quantidade de item a serem removidos
console.log(frutas);

//excluindo itens da lista
frutas.splice(3, 1);
// 3-posição
// 1-quantidade de itens a serem removidos
frutas.shift(); //remove o primeiro item da lista
frutas.pop(); //removendo o ultimo item da lista 
console.log(frutas);

frutas = ['maçã', 'banana', 'morango', 'abacaxi', 'melancia', 'laranja', 'uva'];
console.log(frutas);

console.log(frutas[4]); //posição especifica;
console.log(frutas.slice(0,4)); //da posição 0 pegar 4 itens
console.log(frutas.slice(1)); //da posição 1 até o ultimo
console.log(frutas.slice(-1)); //nr de itens do fim pro inicio
console.log(frutas.length); //total de itens na lista

frutas.sort // ordenando a lista em ordem crescente
console.log(frutas);
frutas.reverse() //ordenando lista em ordem decrescente











