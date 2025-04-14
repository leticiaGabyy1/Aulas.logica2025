const prompt = require('prompt-sync')();

function ParImpar(nr){
    nr=prompt('qual é o numero ')

    if (nr % 2 ==0){
console.log('par');

    } else{
        console.log('impar');
        
    }
}
ParImpar(2)
ParImpar(3)