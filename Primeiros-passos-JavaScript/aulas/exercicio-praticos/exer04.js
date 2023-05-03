class Carro{
    marca;
    cor;
    gastoPorKm;


    constructor(marca,cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularGastos(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * precoCombustivel * this.gastoPorKm
    }
}

const uno = new Carro('fiat', 'branco', 1 / 10);
console.log(uno.calcularGastos(70,5));

