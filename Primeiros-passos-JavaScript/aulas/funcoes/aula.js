function test(){
    console.log('Hi');
}
test();

function escrevaNome(name){
    console.log('Your name is: ' + name);
}
escrevaNome('Milena');

function quadrado(numero){
    return numero * numero;
}
const quadradoDeUmNumero = quadrado(10);
console.log(quadradoDeUmNumero);

function incrementoJuros (valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}
console.log(incrementoJuros(100,10));  
console.log(incrementoJuros(100,15));
console.log(incrementoJuros(100,50));




function verificarIdade(idade){
    if (idade >= 18){
        console.log ('Maior de idade');
    } else { 
        console.log ('Menor de idade');
    }
}
verificarIdade(15);

