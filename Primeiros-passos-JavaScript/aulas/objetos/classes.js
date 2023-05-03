class Pessoa{
    nome;
    idade;
    altura;
    anoDeNascimento;

    constructor(nome,idade,altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever(){
        console.log (`Meu nome é ${this.nome} e minha idade é ${this.idade} minha altura é de ${this.altura}`);
    }
};

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const milena = new Pessoa('Milena', 25, 1.70);
const gabriel = new Pessoa('Gabriel', 25, 1.90);

compararPessoas(milena, gabriel);


