const prompt = require('prompt-sync')();
// ! (não) && (E) || (Ou)
// Estrutura condicional composta e encadeada 
// operadores lógicos

let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2);  // False por que apenas 2 condições é ff 
console.log(a > 1 && b < 2);  // False por que apenas 1 condição é verdadeira
console.log(a > 1 && b < 4);  // True por que 2 condições é verdadeiro
console.log(a > 1 && b < 4 && c > 4);  //True todas as condições é verdadeira 
console.log(a > 1 && b < 4 && c > 5); //False

console.log(a > 2 || b < 2); // False nenhuma condição é verdadeira 
console.log(a > 1 || b < 2); // True pelo menos uma condção é verdadeira
console.log(a > 1 || b < 4); // True pelo menos 1 é verdadeira 
console.log(a > 1 || b < 4 && c > 4); // True

let altura = Number (prompt(' digite sua altura'));
let peso = Number (prompt('digite seu peso'));
let imc = peso / (altura**2);
if (imc < 18.5) {
    console.log('você está abaixo do peso ideal ');
    
} else  if (imc > 18.5 && imc < 24.9){ 
    console.log(' você está no peso ideal');

} else if (imc > 25 && imc < 29.9) {
    console.log('você está com sobrepeso');
    
} else if(imc > 30) {
    console.log(' você está com obesidade');
    
}

let lado1 = Number(prompt(' digite o lado 1 '));
let lado2 = Number(prompt('digite o valor do 2 lado'));
let lado3 = Number(prompt('digite o valor do 3 lado'));
if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1) {
    console.log('se ele for igual ele é equilatero');
    
} else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
    console.log('se ele estiver diferenteele é escaleno');
    
} else {
    console.log(' seu triangulo é isósceles');
    
}
let vendas = Number(prompt('qual valor das vendas'));
let horasSemanais = Number(prompt(' quantas horas trabalhadas'));
if (vendas >= 5000 || horasSemanais >= 40) {
    console.log(' você tem direito a um bonus');
    
} else {(vendas < 5000 || horasSemanais < 40) 
    console.log('você não tem direito a um bonus');
    
}
let algoritmo=prompt('qual a letra');
if (algoritmo=='a' || algoritmo=='e' || algoritmo=='i' ||algoritmo== 'o' ||algoritmo== 'u') {
    console.log(' vogal');
    
} else { 
     console.log(' a letra é um consoante');

    
}