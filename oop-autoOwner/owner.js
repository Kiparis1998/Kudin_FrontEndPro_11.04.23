export class Owner {
    constructor(name, age) {
        this.name = name || 'Felix';
        this.age = age || 25;
    }
    showInfo() {
        return `${this.name}, their age - ${this.age}`;
    }
}