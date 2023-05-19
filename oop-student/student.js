export class Student {
    grade = [];
    attendance = [];
    constructor(name, surname, age, markArr) {
        this.name = name || 'Renato';
        this.surname = surname || 'Lyra';
        this.age = age || 25;
        this.markArr = markArr || '90, 80, 87, 97, 98';
        this.grade.push(...this.markArr.split(', '));
    }
    getAgeOfStudent() {
        console.log(`${this.name}'s age - ${this.age}`)
    }
    getAverageGrade() {
        const averageMark = this.grade.reduce((accum, item) => {
            accum += +item;
            return accum;
        }, 0);
        return averageMark / this.grade.length;
    }
    present() {
        if(this.attendance.length < 25) {
            this.attendance.push(true);
        } else {
            console.log('You are run out of any vacant space for putting down!')
        }
    }
    absent() {
        if(this.attendance.length < 25) {
            this.attendance.push(false);
        } else {
            console.log('You are run out of any vacant space for putting down!')
        }
    }
    summary() {
        const isAttended = this.attendance.filter(item => item === true);
        const averageAttendance = ((isAttended.length / this.attendance.length * 100) / 100).toFixed(2);
        if (this.getAverageGrade() > 90 && +averageAttendance > 0.9) return console.log(`${this.name}, well done!`);
        if (this.getAverageGrade() > 90 || +averageAttendance > 0.9) return console.log(`${this.name}, not bad!`);
        if (this.getAverageGrade() < 90 && +averageAttendance < 0.9) return console.log(`${this.name}, you are a stinky!`);
    }
}