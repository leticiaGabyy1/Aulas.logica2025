const prompt = require('prompt-sync')();
let totalPar = 0;
let totalImpar = 0
let somaImpar = 0;
let somaPar = 0;

while (true) {
    let num = Number(prompt('Digite o número ou 0 para parar: '));

    if (num == 0) {
        break;
    }else {
        if (num % 2 == 0){ //par
            totalPar++;
            somaPar = somaPar + num;
        }else{
            totalImpar++; 
            somaImpar = somaImpar + num;
        
        }
    }
    
}
console.log(`A soma do n° par é ${totalPar} nº pares, somadas resultou em ${somaPar}`);
console.log(`A soma do n° ${totalImpar} nº impar, somadas resultou em ${somaImpar}`);