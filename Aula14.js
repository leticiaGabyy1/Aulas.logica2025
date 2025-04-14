const prompt = require('prompt-sync')();

function Linha(){

console.log(' - - - - - - - - - - - - -');

}
Linha();
console.log('      SESI/SENAI          ');
Linha()

function Cabecalho() {
    Linha()
    console.log('SESI/SENAI');
   Linha()
    
}
Cabecalho()

function CabecalhoEscola(nomedaEscola) {
    Linha();
    console.log(nomedaEscola);
   Linha();
    
}
CabecalhoEscola('SESI')
CabecalhoEscola('USP')
function Soma (nr1, nr2){
    let resultado= nr1 + nr2
    console.log(resultado);
    
}
Soma(5, 8);

//função com parâmetros e retorno
function  Media(n1,n2) {
    let resultado = (n1 + n2) / 2;
    return resultado;
}






