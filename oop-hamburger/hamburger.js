export class Hamburger {
    static SIZE_SMALL = [50, 20];
    static SIZE_BIG = [100, 40];

    static STUFFING_CHEESE = [10, 20];
    static STUFFING_SALAD = [20, 5];
    static STUFFING_POTATO = [15, 10];

    static TOPPING_MAYO = [20, 5];
    static TOPPING_SAUCE = [15, 0];

    price = 0;
    calories = 0;

    constructor(...rest) {
        rest.forEach(([cost, cal]) => {
            this.price += cost;
            this.calories += cal;
        });

    }
    addTopping(...toppings) {
        toppings.forEach(([cost, cal]) => {
            this.price += cost;
            this.calories += cal;
        })
    }

    calculate() {
        return this.calories;
    }

    calculatePrice() {
        return this.price;
    }
}