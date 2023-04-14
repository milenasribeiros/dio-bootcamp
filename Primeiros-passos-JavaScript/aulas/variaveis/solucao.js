const praciFuel = 6.14;
const averageKmPerLiters = 1;
const distanceInKm = 25;

const litersConsumption = distanceInKm / averageKmPerLiters;
const valueReal = litersConsumption * praciFuel;
console.log(valueReal.toFixed(2));  