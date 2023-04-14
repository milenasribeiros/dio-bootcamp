const noteOne = 9;
const noteTwo = 9;
const noteThree = 9;

const averageNote = (noteOne + noteTwo + noteThree) / 3;
console.log(averageNote);

if (averageNote < 5) {
    console.log('Disapproved');
} else if (averageNote >= 5 && averageNote <= 7) {
    console.log('Recovery');
} else {
    console.log('Approved');
}
