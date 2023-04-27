const amountOfNum = [];
const amountOfSquare = [];
const multiTableOfSeven = [];
let sumOfWholeNum = 0;
let productOfNum = 1;
const dividingNum = 500;
let arithmeticAverageNum = 0;
let binaryNum = 0;
const numDivisibleByThree = [];

for(let i = 10; i <= 20; i++) {
    amountOfNum.push(i);
}
console.log(amountOfNum.join(', '));

for(let i = 10; i <= 20; i++) {
    amountOfSquare.push(Math.pow(i, 2));
}
console.log(amountOfSquare.join(', '));

for(let i = 1; i <= 10; i++) {
    multiTableOfSeven.push(`${i} * 7 = ${i * 7}`);
}
console.log(multiTableOfSeven.join(', '));

for(let i = 1; i <= 15; i++) {
    sumOfWholeNum += i;
}
console.log(String(sumOfWholeNum));

for(let i = 15; i <= 35; i++) {
    productOfNum *= i;
}
console.log(String(productOfNum));

for(let i = 1; i <= dividingNum; i++) {
    arithmeticAverageNum += i;
}
arithmeticAverageNum /= dividingNum;
console.log((String(arithmeticAverageNum)));

for(let i = 30; i <= 80; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    binaryNum += i;
}
console.log(String(binaryNum));

for(let i = 100; i <= 200; i++) {
    if(i % 3 !== 0) {
        continue;
    }
    numDivisibleByThree.push(i);
}
console.log(numDivisibleByThree.join(', '));