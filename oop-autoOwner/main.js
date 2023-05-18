import {Owner} from "./owner.js";
import {Car} from "./car.js";

const firstOwner = new Owner('Dwight', 14);
const secondOwner = new Owner('Claudette', 28);
const thirdOwner = new Owner();

const firstCar = new Car('Tesla', 'Model X', 2023, 'AE5643');
const secondCar = new Car('Honda', 'Accord', 2014, 'BA2679');
const thirdCar = new Car();

firstCar.assignOwner(firstOwner);
secondCar.assignOwner(secondOwner);
thirdCar.assignOwner(thirdOwner);

console.log(firstCar)
console.log(secondCar)
console.log(thirdCar)

firstCar.showDataAboutOwnerAndCar();
secondCar.showDataAboutOwnerAndCar();
thirdCar.showDataAboutOwnerAndCar();