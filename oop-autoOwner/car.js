import {Owner} from "./owner.js";

export class Car {
    owner = {};
    constructor(brand, model, yearOfRelease, numberplate) {
        this.brand = brand || "Tesla";
        this.model = model || "Model S";
        this.yearOfRelease = yearOfRelease || 2022;
        this.numberplate = numberplate || "AA2034";
    }
    assignOwner(human) {
        if(human.age > 18) {
            this.owner = human;
        } else {
            console.log(`${human.name} cant be an owner, because they are under 18`);
            this.owner = '';
        }
    }
    showDataAboutOwnerAndCar() {
        console.log(`A brand of this car - ${this.brand},
a model - ${this.model},
the year of release - ${this.yearOfRelease},
a numberplate - ${this.numberplate}
an owner - ${this.owner ? this.owner.showInfo() : 'None'}`);
    }
}