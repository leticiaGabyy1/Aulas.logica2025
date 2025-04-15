const prompt = require('prompt-sync')();

function senhaAleatoria(qtdeCaracteres){
    let listaCaracteres=['!','a',5,'R','$','#','@','f','g'];
    let senha= '';

    for (let x = 1; x <=qtdeCaracteres; x++){
    let posSorteada= Math.floor(Math.random()* listaCaracteres.length) 
    senha = senha + listaCaracteres[posSorteada];
    }
    return senha;   
}
let senhaGerada= senhaAleatoria(20)
console.log(senhaGerada);


