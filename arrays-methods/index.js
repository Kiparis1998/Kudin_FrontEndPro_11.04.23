const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let multipliedNum = 1;

const ELEMENT = 0;
const AMOUNT_OF_ELEMENTS = 1;

const sumAndAmount = arr.reduce((accum, item) => {
    if(item > 0) {
        accum[ELEMENT] += item;
        accum[AMOUNT_OF_ELEMENTS]++;
        return accum;
    }
    return accum;
}, [0, 0])
console.log(`The array's sum is ${sumAndAmount[ELEMENT]} and amount is ${sumAndAmount[AMOUNT_OF_ELEMENTS]}`);

const minNum = arr.find(item => item === Math.min(...arr));
const indexOfMin = arr.indexOf(minNum);
console.log(`The smallest number in the array is ${minNum} and his index is ${indexOfMin}`)

const maxNum = arr.find(item => item === Math.max(...arr));
const indexOfMax = arr.indexOf(maxNum);
console.log(`The biggest number in the array is ${maxNum} and his index is ${indexOfMax}`)

const negativeAmount = arr.reduce((accum, item) => {
    if(item < 0) return ++accum;
    return accum;
}, 0);
console.log(`The array's negative amount of elements is ${negativeAmount}`);

arr.forEach((item) => {
    if(item > 0) multipliedNum *= item;
})
console.log(`Multiplied amount of positive digits in the array is ${multipliedNum}`)