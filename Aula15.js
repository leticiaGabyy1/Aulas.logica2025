//Escopo de variaveis
//Variavel global pode ser acessada em qualquer lugar
//Variavel local so pode ser acessada dentro do bloco

function NomeEscola(){
    let escola = 'SESI';
    console.log(`valor dentro da função: ${escola}`);
    
}

 let escola ='SENAI';
 console.log(`valor fora da função:${escola}`);
 NomeEscola();
 console.log(`valor após a função: ${escola}`);
 
 //utilizando variaveis global
 var escola2 = 'SENAI'
 function NomeEscola2(){
    var escola2 = 'SESI';
    console.log(`valor dentro da função: ${escola2}`);
    
}

 var escola2 ='SENAI';
 console.log(`valor fora da função:${escola2}`);
 NomeEscola();
 console.log(`valor após a função: ${escola2}`);
 
 //Documentando funções usando o JSDoc
/**
 * soma de dois numeros 
 * @param {number} a - primeiro numero 
 * @param {number} b -  segundo numero 
 * @returns {number} - soma dos dois numeros 
 */
 function Soma (a, b){
    return a + b;
 }
 Soma(2,4);
 