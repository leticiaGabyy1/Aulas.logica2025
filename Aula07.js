const prompt = require('prompt-sync')();
//Operadores relacionais 
// == quer dizer igual, igualdade
// != quer dizer diferente
// > maior que
// < menor que
// >= maior que ou igual
// <= menor que ou igual

let a = 2;
let b = 3;
console.log( a > b );  //false
console.log( a == b);  //false
console.log( a != b);  //true
console.log( a > 2);   //false
console.log(a >= 2);  //true

//estrutura de condição (IF)
let tenhoIngresso = true;
if( tenhoIngresso==true ){ //se a condição for verdadeira
    //entra no bloco de comando
    console.log('posso entrar no show');
    
}

let idade = Number(prompt('qual é a sua idade?'));
if (idade >18){
    console.log('maior de idade');
    
}
tenhoIngresso = false
if(tenhoIngresso == true){ 
    console.log('posso entrar no show?');
} else { 
    console.log('estou barrado na portaria');
    
    
}

if (idade >18) {
    console.log('maior de idade');
} else {
    console.log('menor de idade');
    
}
    
    
