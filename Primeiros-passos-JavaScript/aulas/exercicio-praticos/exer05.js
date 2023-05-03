class Pessoa {
    nome;
    peso;
    altura;
    
    constructor(nome,peso,altura, ) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5){
            return ('UNDER WEIGHT');
        } else if (imc >= 18.5 && imc < 25){
            return ('NORMAL WEIGHT');
        } else if (imc >= 25 && imc < 30){
            return ('OVER WEIGHT');
        } else if (imc >= 30 && imc > 40){
            return ('OBESE');
        }else {
            return('SEVERE OBESITY');
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.calcularImc());
console.log(jose.classificarImc());
