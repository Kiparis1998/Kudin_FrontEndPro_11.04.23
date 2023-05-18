export class Building {
    allCribs = [];

    constructor(MAX_AMOUNT_OF_CRIBS) {
        this.MAX_AMOUNT_OF_CRIBS = MAX_AMOUNT_OF_CRIBS || 10;
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