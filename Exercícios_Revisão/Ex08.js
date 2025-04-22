const prompt = require('prompt-sync')();

function valor(x) {
    if (x >= 0) {
        console.log(`o numero é ${x} é positivo`);

    } else {
        console.log(`o numero é ${x}negativo`);

    }
}
valor(10)
valor(-10)