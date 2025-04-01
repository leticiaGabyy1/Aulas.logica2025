const prompt = require('prompt-sync')();
let metro = Number (prompt('qual é o metro?'));
let centimetro = metro*100;
let milimetros = metro*1000;
let km = metro/1000;
console.log(`O valor do n° é de ${metro} convertido para centimetros é ${centimetro} convertido para milimetros é ${milimetros} convertido para km é ${km}`);

