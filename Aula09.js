//Estruturas condicionais aninhadas 
//Switch case
const prompt = require('prompt-sync')();
let valorCompra = 120;
let clienteVip = true;
if (valorCompra >= 100) {
    if(clienteVip == true) {
        console.log(`você ganhou R$ ${valorCompra * 10 / 100}`);
        
    } else {
        let desconto = valorCompra * 5 / 100;
        console.log(` você ganhou R$ ${desconto} de desconto`);
        
    }
} else {
    let restante = valorCompra - 100;
    console.log(`compre mais R$ ${restante} e ganhe desconto`);
    
}

let idade =Number(prompt(' qual  a sua idade ?'));
 if (idade < 16) {
    console.log('você não pode votar')
} else if (idade > 16 && idade  < 18 || idade > 70) {
    console.log('voto facultativo');
} else { 
    (idade > 18 && idade < 70) 
        console.log(' voto obrigatorio');
        
} 
let n1 =Number(prompt('digite o primeiro numero'));
let n2 =Number(prompt('digite o segundo numero'));
let op =prompt('digite o operador ( + - / * ** ): ' );
switch (op) {        
    case '+':
        console.log(n1 + n2); // if (op == '-')
        break;
        case '-':
        console.log(n1 - n2); //else if (op == '-')
        break;
        case '/':
            console.log(n1 / n2); //else if (op == '/')
            break;
            case '*':
                console.log(n1 * n2); //else if (op == '*')
                break;
                case '**':
                    console.log(n1 ** n2); //else if (op == '**')
                    break;
                    default:  //else 
                    console.log(' operado invalido ');

                    
}
 

