import {Human} from "./human.js";
import {Crib} from "./crib.js";
import {Building} from "./building.js";

const firstHuman = new Human('Steve', 'male');
const secondHuman = new Human('Nancy', 'female');
const thirdHuman = new Human();

const firstCrib = new Crib();
const secondCrib = new Crib();

firstCrib.addResident(firstHuman);
firstCrib.addResident(secondHuman);
secondCrib.addResident(thirdHuman);

const residence = new Building(3);
residence.addCrib(firstCrib);
residence.addCrib(secondCrib);

console.log(residence);