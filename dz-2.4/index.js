let firstNumber = prompt('Select your first digit', '');
let secondNumber = prompt('Select your second digit', '');
let thirdNumber = prompt('Select your third digit', '');
const averageNumber = (Number(firstNumber)+Number(secondNumber)+Number(thirdNumber))/3;
alert(`Your arithmetic mean is ${averageNumber}`);