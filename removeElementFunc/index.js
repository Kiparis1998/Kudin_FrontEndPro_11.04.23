const array = [1, 2, 3, 4, 5, 6, 7];

removeElement = (arr, elem) => {
    if (!arr.includes(elem)) {
        return `${elem} is not found`;
    }
    const index = arr.indexOf(elem);
    arr.splice(index, 1);
    return arr;
}

const result = removeElement(array, 5);
console.log(result);