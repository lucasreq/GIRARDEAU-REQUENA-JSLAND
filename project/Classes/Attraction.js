const Building = require('./Building');
const cashier = require('./Cashier');

class Attraction extends Building{
    constructor(name, price, places, employee){
        super();
        super.name = name;
        super.employee = employee;
        this.place = places;
        this.price = price;
    }

    getPrice() {
        return this.price;
    };

    getPlaces() {
        return this.place;
    };
}

module.exports = Attraction;