const charactersStr = 'abcdefghijklmnopqrstuvwxyz0123456789';

generateKey = (length, characters) => {
    if (typeof length !== "number") {
        return "You haven't pointed a digit!";
    }

    let newStr = '';
    const charactersLength = characters.length;

    for (let i = 1; i <= length; i++) {
        newStr += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return newStr;
}

const result = generateKey(16, charactersStr);
console.log(result);