const prompt = require('prompt-sync')();
console.log('=====================')
console.log('💕jogo da adivinhação 💕');
console.log('======================');

    



let nrSecreto = Math.floor(Math.random() * 100) + 1;
let acertou = false;
let tentativas = 0;

while (acertou == false) {
    let chute = Number(prompt('digite um numero entre 1 e 100: '));
    tentativas++; 

    if (chute == nrSecreto) {
        console.log(`Parabens você acertou em ${tentativas} tentativas!! 🎉`);
        acertou = true;
    } else if (chute > nrSecreto) {
        console.log(` você chutou ${chute}, tente um número 👇 `);
    } else if (chute < nrSecreto) {
        console.log(`você chutou ${chute}, tente um numero ☝`);

    }

}




