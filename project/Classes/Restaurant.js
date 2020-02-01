const Building = require('./Building');

class Restaurant extends Building {
    constructor(name, employee, price_m1, price_m2){
        super();
        super.name = name;
        super.employee = employee;
        this.price_m1 = price_m1;
        this.price_m2 = price_m2;
    }

    getPriceM1() {
        return this.price_m1;
    }

    getPriceM2() {
        return this.price_m2;
    }
}

module.exports = Restaurant;