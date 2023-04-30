const array = [1, 2, 3, 4, 5, 6, 7];

removeElement = (arr, elem) => {
    if (!array.includes(elem)) {
        return `${elem} is not found`;
    }
    const index = array.indexOf(elem);
    array.splice(index, 1);
    return array;
}

const result = removeElement(array, 5);
console.log(result);