const prompt = require('prompt-sync')();

let ano = Number(prompt('que ano você nasceu?'));
if (ano > 2007){
    console.log('menor de idade');

} else {
    console.log('maior de idade');
    
}
