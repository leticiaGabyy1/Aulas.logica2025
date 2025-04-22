const prompt = require('prompt-sync')();

let genero = prompt('digite seu gênero, (F/M)');
if (genero == 'M'){
    console.log('sexo valido');
    
} else if (genero == 'F'){console.log('sexo valido');
} else {
    console.log('sexo invalido');
    
}