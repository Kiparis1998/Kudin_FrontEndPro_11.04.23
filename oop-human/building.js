export class Building {
    allCribs = [];

    constructor(maxAmountOfCribs) {
        this.MAX_AMOUNT_OF_CRIBS = maxAmountOfCribs || 10;
    }

    addCrib(crib) {
        if(this.allCribs.length < this.MAX_AMOUNT_OF_CRIBS) {
            this.allCribs.push(crib);
        }
        else {
            console.log('You are run out of vacant cribs!');
        }
    }
}