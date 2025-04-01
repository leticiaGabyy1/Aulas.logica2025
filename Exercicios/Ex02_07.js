const prompt = require('prompt-sync')();
let velocidade = Number(prompt('qual velocidade?'));
if(velocidade > 80){                            // if = se 
    let multa = (velocidade - 80) * 7
    console.log(`voce sera multado em ${multa}`);
    
} else {                      // else = se não
    console.log('não receberá multa');
    
}