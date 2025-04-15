const prompt = require('prompt-sync')();


function operacao(n1,n2,op){
    if(op === '+'){
        console.log(`A soma de ${n1} + ${n2} = ` + (n1 + n2));
    }else if(op === '-'){
        console.log(`A subtração de ${n1} - ${n2} = ` + (n1 - n2));
    }else if(op === '*'){
        console.log(`A multiplicação de ${n1} * ${n2} = ` + (n1 * n2));
    }else if(op === '/'){
        console.log(`A divisão de ${n1} / ${n2} = ` + (n1 / n2));
    }else if(op === '**'){
        console.log(`A  de ${n1} ** ${n2} = ` + (n1 ** n2));
    }




}

let num1 = prompt('Digite um número ');
let num2 = prompt('Digite outro número ');
let operador = prompt('Informe a operação - sugestão: + - * / **' );
operacao(num1,num2,operador);