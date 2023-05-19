import {Student} from "./student.js";

const firstStudent = new Student('Thalita', 'Lyra', 24, '99, 88, 83, 97, 95');
const secondStudent = new Student('Kate', 'Denson', 26, '86, 88, 63, 60, 75');
const thirdStudent = new Student();

firstStudent.getAgeOfStudent();
secondStudent.getAgeOfStudent();
thirdStudent.getAgeOfStudent();

console.log(`${firstStudent.name}'s average mark - ${firstStudent.getAverageGrade()}`);
console.log(`${secondStudent.name}'s average mark - ${secondStudent.getAverageGrade()}`);
console.log(`${thirdStudent.name}'s average mark - ${thirdStudent.getAverageGrade()}`);


for (let i = 1; i <= 12; i++) {
    firstStudent.present();
    firstStudent.absent();
}

for (let i = 1; i <= 15; i++) {
    secondStudent.present();
}

for (let i = 1; i <= 7; i++) {
    secondStudent.absent();
}

for (let i = 1; i <= 2; i++) {
    thirdStudent.absent();
}

for (let i = 1; i <= 20; i++) {
    thirdStudent.present();
}

firstStudent.summary();
secondStudent.summary();
thirdStudent.summary();

console.log(firstStudent);
console.log(secondStudent);
console.log(thirdStudent);
