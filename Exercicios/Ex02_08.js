const prompt = require('prompt-sync')();
let vendas = Number(prompt('quantidade de venda?'));
if(vendas > 5000){
    let maior = vendas * (5 / 100);
    console.log(`comissão é de ${maior}`);
    
} else { let menor = vendas * (3/100);
    console.log(`comissão é de ${menor} `);
    
}