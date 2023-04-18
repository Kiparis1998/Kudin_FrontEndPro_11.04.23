const elementsOfArr = prompt("Input the array's elements", 'Nick, Michael, Emma, Lexi');
const lengthOfArr = prompt("Input the array's length", '4');

const initialArr = [];
const deletedElements = [];
const ultimateArr = [];

if (elementsOfArr && lengthOfArr) {

    initialArr.push(...elementsOfArr.split(', '))
    console.log(`Your array - ${initialArr}`);


    if (initialArr.length <= +lengthOfArr) {
        initialArr.length = +lengthOfArr;

        initialArr.sort();
        console.log(`The sorted array - ${initialArr}`);

        if (initialArr.length >= 4) {
            deletedElements.push(...initialArr.splice(1, 3));
            console.log(`The deleted array's elements - ${deletedElements}`);
            ultimateArr.push(...initialArr);
            console.log(`Your ultimate array after processing - ${ultimateArr}`);
        } else {
            alert('Your sorted array doesnt have enough length to delete some elements!');
        }

    } else {
        alert('Your array doesnt have appropriate length to keep performing!');
    }
} else {
    alert('You have canceled the input!');
}