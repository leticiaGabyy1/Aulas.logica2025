const prompt = require('prompt-sync')();
//Interação sobre nossos vetores (arrays/ listas)

//vetor        0         1         2         3
let frutas = ['maça', 'banana', 'abacaxi', 'uva'];
//para interar sobre vetor utilizamos o for
for(let x = 0; x < frutas.length; x++) {
    console.log(`A fruta da posição ${x} é a ${frutas[x]}`);
    
}
console.log('FIM');

//iterando sobre uma lista usando for of
let listaNomes = ['Pelé', 'maradona','Messi', 'cristiano ronaldo'];
for (let jogador of listaNomes) {
    console.log(`o jogador é ${jogador}`);
    
}
let soma =0;
let listaNumeros =  [0, 1,2, 3, 4];
for (let Numeros  of listaNumeros) {
    console.log(`o numero é ${Numeros}`);
    soma = Numeros + soma;
}
console.log(soma);

//verificando se um elemento existe em uma array usando includes()
let vogais = ['a','e','i','o','u'];
let consoante = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z' ];
let numeros = ['0','1','2','3','4','5','6','7','8','9','10'];
let letraParaVerificar = prompt('digite uma letra ');
if (vogais.includes(letraParaVerificar.toLowerCase())){
    console.log(`a letra ${letraParaVerificar} é uma vogal`);
    
}else if(consoante.includes(letraParaVerificar.toLowerCase())){
console.log(`a letra ${letraParaVerificar}é uma consoante`);
}else if(numeros.includes(letraParaVerificar.toLowerCase())){
    console.log(` ${letraParaVerificar} é um numero`);
}else{
    console.log(`a letra ${letraParaVerificar} não é uma letra`);
    
}

//obtendo a posição de um item em um array usando o for of e a função entries()
//    pos  (posição )         0         1         2         3
let listaFrutas = ['maça', 'banana', 'abacaxi', 'uva'];
for(const [pos,fruta] of listaFrutas.entries()) {
    console.log(`a fruta da posição ${pos} é ${fruta}`);
    
}

//separando uma string utilizando o split()
let produtos = 'celular, notebook,TV,tablet,monitor';
let listaProdutos = produtos.split(',');
console.log(produtos);
console.log(listaProdutos);

let texto = 'eu gosto de programar em JavaScript'

//strings são lista (vetores/ arrays) de caracteres
//            01234
let escola = 'SENAI'; //[ 'S', 'E', 'N', 'A', 'I']
console.log(escola[0]);
//utilizando o exemplo for of exibir a palavra da seguinte forma
//S
    //E
        //N
            //A
                //I
 
for (const letra of escola){
    console.log(letra);
    
}


