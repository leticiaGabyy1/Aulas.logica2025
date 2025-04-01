//Estrutura de laço de repetição for
const prompt = require('prompt-sync')();

//inicialização da variavel; condição do for ; incremento da variavel
for (let contador = 1; contador <= 5; contador++){
    console.log(contador);
    
}

//Neste for iniciamos a partir do nº 5, até o nº 50
//incrementando de 3 em 3 no contador 
for (let contador = 5; contador <= 50; contador+= 3) {
    console.log(contador);

}

//Utilizando o break para parar o for 
for (let contador =1; contador <=500; contador++) {
    console.log(contador);
    if (contador == 50) {
        break;
    }
    
}

//tabuada com for

let nr =6;
for (let contador = 1; contador <= 10; contador++){
    console.log(`${nr} x ${contador} = ${nr * contador}`);

} 

console.log('Entregando os notebooks');
for (let nr = 1; nr <=32; nr++){
    let nome = prompt(`quem é o numero ${nr}: `);
    let presente = prompt (`o (A) ${nome} está presente (S ou N)`);

    if(presente == 'S'){
        console.log(`Pegar o notebook ${nr} `);
        console.log(`levar o notebook ate o (a) ${nome}`);
        
        
    } else {
        console.log(`não pegar o notebook ${nr}`);
        
    }
}



