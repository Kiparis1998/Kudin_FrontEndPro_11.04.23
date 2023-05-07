closureFunc = () => {
    let digit = 0;
    return (num) => {
        console.log(digit += num);
        return digit;
    }
}

const sum = closureFunc();

sum(3);
sum(5);
sum(20);