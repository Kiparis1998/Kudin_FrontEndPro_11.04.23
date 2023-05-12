const array = [34, 76, 'Steve', true, 23, null, {name: 'Nancy'}, 75];

findArithmeticAverageNumber = (arr) => {
    let amountOfNum = 0;
    let result = arr.reduce((accum, item) => {
        if (typeof item !== "number") {
            return accum;
        }
        accum += item;
        amountOfNum++;
        return accum;
    }, 0);

    result /= amountOfNum;
    return result;
}

const averageNum = findArithmeticAverageNumber(array);
console.log(averageNum);

const firstNum = +prompt('Input your first number', '6');
const sign = prompt('Input your sign', '*');
const secondNum = +prompt('Input your second number', '10');

doMath = (x, mark, y) => {
    if (!isNaN(x) && mark && !isNaN(y)) {
        if (mark === '+') return x + y;
        if (mark === '-') return x - y;
        if (mark === '/') return x / y;
        if (mark === '*') return x * y;
        if (mark === '%') return x % y === 0 ? 'An even digit' : 'An odd digit';
        if (mark === '^') return Math.pow(x,y);
    }

    return `You've pointed something wrong!`
}

const outputMath = doMath(firstNum, sign, secondNum);
console.log(outputMath);

createDoubleArr = () => {
    const mainArray = [];
    const LENGTH_OF_EXTERNAL_ARRAY = +prompt('Input the length of main array', '2');
    for (let i = 1; i <= LENGTH_OF_EXTERNAL_ARRAY; i++) {
        const LENGTH_OF_INTERNAL_ARRAY = +prompt('Input the length of internal array', '3');
        const dataForInternalArray = prompt('Input your data using comma', 'Felix, Noah, Jane, Kate');
        const dataToBeAddedToExternalArray = dataForInternalArray.split(', ').slice(0, LENGTH_OF_INTERNAL_ARRAY);
        mainArray.push(dataToBeAddedToExternalArray);
    }
    return mainArray;
}

const ultimateArr = createDoubleArr();
console.log(ultimateArr);

const string = prompt('Input your string', 'hello world');
let removedElem = prompt('Input characters for removing', 'l, d');

removeSomeCharacters = (string, elemForDeleting) => {
    const result = string.split('').filter((item) => {
        if (!elemForDeleting.includes(item)) return item;
    });
    return result.join('');
}

if ((string !== null && removedElem !== null) && (string !== '' && removedElem !== '')) {
    removedElem = removedElem.split('').filter((item) => {
        if (!item.includes(' ') && !item.includes(',')) return item;
    });

    const newStr = removeSomeCharacters(string, removedElem);
    console.log(newStr);

} else {
    console.log('Incorrect input')
}