const elementsOfArr = prompt("Input the array's elements", 'Nick, Michael, Emma, Lexi');
const lengthOfArr = prompt("Input the array's length", '4');

const newArr = [];
const sortedArr = [];
const arrWithDeletedElements = [];
const result = [];

if (elementsOfArr && lengthOfArr) {
    console.log('Initial array');
    console.log(newArr);

    newArr.push(...elementsOfArr.split(', '))
    console.log(`Your array`);
    console.log(newArr);

    console.log(`The length of the array`);
    console.log(newArr.length);

    console.log(`The length you have pointed`);
    console.log(+lengthOfArr);

    if (newArr.length <= +lengthOfArr) {
        newArr.length = +lengthOfArr;

        sortedArr.push(...newArr.sort());
        console.log(`The sorted array`);
        console.log(sortedArr);

        if (sortedArr.length >= 4) {
            arrWithDeletedElements.push(...sortedArr.splice(1, 3));
            console.log(`The deleted array's elements`);
            console.log(arrWithDeletedElements);
            result.push(...sortedArr);
            console.log(`Your ultimate array after processing`);
            console.log(result);
        } else {
            alert('Your sorted array doesnt have enough length to delete some elements!');
        }

    } else {
        alert('Your array doesnt have appropriate length to keep performing!');
    }
} else {
    alert('You have canceled the input!');
}