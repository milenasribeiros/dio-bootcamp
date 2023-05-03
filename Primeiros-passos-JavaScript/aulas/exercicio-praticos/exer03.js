const price = 100;
const formaPagamento= 1;

if (formaPagamento == 1) {
    console.log (price - (price * 0.1));
} else if (formaPagamento == 2) {
    console.log (price + (price * 0.15));
} else if (formaPagamento == 3) {
    console.log (price);
} else {
    console.log (price + (price * 0.1));
}



