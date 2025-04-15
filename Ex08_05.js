const prompt = require('prompt-sync')();
function recebeParametro(numero){
for (let i = 1; i<=10; i++){
    console.log(`a tabuada de ${numero} x ${i} =` + (numero * i));
    
}
} let nr=prompt('qual é o numero? ');
recebeParametro(nr)