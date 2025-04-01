//estrutura de laço de repetição While
const prompt = require('prompt-sync')();

let resposta = 'S';
while(resposta == 'S') {
    console.log('você esta dentro do bloco');
    resposta = prompt('deseja continuar? S/N')
} 

console.log('fim');

 let senhaSecreta = 'Senai'
  let senhaDigitada = prompt('qual é a senha?')
 while (senhaSecreta != senhaDigitada) {
    console.log('descubra a senha secreta!');
    senhaDigitada = prompt('qual é a senha?:')
}

 console.log('FIM');
 
 //Exemplo 3 -Executando um numero determinado de vezes 
 let contador = 1;
 while (contador <=5) {
    console.log(`o contador está no nº ${contador}`);
    contador = contador + 1;
 }

 //exemplo 4 
 //posso deixar meu laço execultando sem uma condição especifica, apenas 
 //com while (true) e encerrar o loop com o comando break
 let total = 0 
 let qnde = 0 

 while (true) {
    let valor = Number(prompt('digite o valor do produto (0 para encerrar)'));
 
    if (valor == 0) {
        break;
    } else {
        total = valor + total;
        qnde = qnde + 1; // ou qnde++; (mesma coisa)
    }
 }
 console.log(`você comprou no total ${qnde} produtos`);
 console.log(`valor total da compra R$ ${total.toFixed(2)}`);
 
 
 