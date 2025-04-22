const prompt = require('prompt-sync')();

let genero = prompt('digite seu genero (H/M) ');
let altura = prompt('digite a altura ');

if(genero.toUpperCase() == 'H'){
let PesoIdealH = (72.7 * altura) - 58 ;
console.log(`seu peso ideal se for homem é ${PesoIdealH}`);
}else if(genero.toUpperCase() == 'M'){
let PesoIdealM = (61.1 * altura) - 44.7 ;
console.log(`seu peso ideal se for mulher é ${PesoIdealM}`);


}