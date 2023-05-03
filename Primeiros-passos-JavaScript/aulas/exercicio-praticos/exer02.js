const weight = 80;
const height = 1.70;

const imc = weight / Math.pow(height,2);
console.log(imc.toFixed(2));

if (imc < 18.5){
    console.log('UNDER WEIGHT');
} else if (imc >= 18.5 && imc < 25){
    console.log('NORMAL WEIGHT');
} else if (imc >= 25 && imc < 30){
    console.log('OVER WEIGHT');
} else if (imc >= 30 && imc > 40){
    console.log('OBESE');
}else {
    console.log('SEVERE OBESITY');
}
