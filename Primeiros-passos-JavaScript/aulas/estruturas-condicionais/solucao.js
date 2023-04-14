const praciEthanol = 2.69;
const praciGasoline = 6.14;
const typeCombustive = 'Ethanol';
const averageKmPerLiters = 5;
const distanceInKm = 25;

const litersConsumption = distanceInKm / averageKmPerLiters;

if (typeCombustive === 'Ethanol'){
    const valueReal = litersConsumption * praciEthanol; 
    console.log(valueReal.toFixed(2)); 
} else {
    const valueReal = litersConsumption * praciGasoline;
    console.log(valueReal.toFixed(2));
}

