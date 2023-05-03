//Refazer (exer02) utilizando Funções 
//é uma forma do JavaScript de isolar codigo que pode ser muito util para isolar complexidade também em projetos maiores
//As funções podem ser consideradas como objetos, para que possa ser manipulado 

function calcularImc(weight, height) {
    return weight / Math.pow(height, 2);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return'Acima do peso';
    } else if (imc >= 30 && imc > 40) {
        return'Obeso';
    } else {
        return 'Obesidade severa';
    }
}


(function (){
    const weight = 80;
    const height = 1.70;
    const imc = calcularImc(weight, height);
    console.log(classificarImc(imc));
})();



/// Pode ser declarada dessa forma: 
//function main(){
//  const weight = 80;
//  const height = 1.70;
//  const imc = calcularImc(weight, height);
//  console.log(classificarImc(imc));
//}

//E invocada assim:
//main();


//Refazendo o exer03 - usando função

function aplicarDesconto(valor, desconto){
    return(valor - (valor * (desconto/ 100)));
}

function aplicarJuros(valor, juros){
    return(valor + (valor * (juros/ 100)));
}
const price = 100;
const formaPagamento= 4;

if (formaPagamento == 1) {
    console.log (aplicarDesconto (price, 10));
} else if (formaPagamento == 2) {
    console.log (aplicarDesconto (price, 15));
} else if (formaPagamento == 3) {
    console.log (price);
} else {
    console.log (aplicarJuros(price, 10));
}


