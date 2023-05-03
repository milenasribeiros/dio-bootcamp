const milena = {
    nome: 'Milena Ribeiro',
    idade: 26,
    peso: 50,

    descrever: function (){
        console.log (`Meu nome é ${this.nome} e minha idade é ${this.idade} minha altura é de ${this.altura}`);
    }
};

milena.altura = 1.72;
delete milena.peso;

console.log(milena);
console.log(milena.nome);
console.log(milena.idade);
milena.descrever();
console.log(milena['nome']);