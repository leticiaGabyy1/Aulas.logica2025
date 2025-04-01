const prompt = require('prompt-sync')();

console.log('=====================')
console.log('💲 Mega-Sena 💲');
console.log('======================');
for (let contador = 1; contador <= 6; contador++ ) {
    let nrSecreto = Math.floor(Math.random() * 60) + 1;
    console.log(nrSecreto);
   
}
