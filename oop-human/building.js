export class Building {
    allCribs = [];

    constructor(maxAmountOfCribs) {
        this.maxAmountOfCribs = maxAmountOfCribs || 10;
    }

    addCrib(crib) {
        if(this.allCribs.length < this.maxAmountOfCribs) {
            this.allCribs.push(crib);
        }
        else {
            console.log('You are run out of vacant cribs!');
        }
    }
}