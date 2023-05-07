pow = (num, degree) => {
    if (typeof num === "number" && typeof degree === "number") {
        if (degree < 1) return 1;
        return num * pow(num, degree - 1);
    }
    return 'Incorrect input!';
}

const result = pow(4, 5);
console.log(result);