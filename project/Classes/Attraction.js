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

    //toPay(nbparticipant) {
    //    let totprice = (nbparticipant * this.price);
    //    console.log("vous devez payer : " + totprice);
    //    return totprice;
    //}


    getPrice() {
        return this.price;
    }
}

module.exports = Attraction;