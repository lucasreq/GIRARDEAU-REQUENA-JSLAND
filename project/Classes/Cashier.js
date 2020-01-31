const Person = require('./Person');
const Attraction = require('./Attraction');
const Client = require('./Client');
const prompts = require('prompts');

class Cashier extends Person{
    constructor(firstname, lastname, attraction){
        super();
        super.firstname = firstname;
        super.lastname = lastname;
        this.attraction = attraction;
    }

    Pay() {
        (async () => {
            const {value} = await prompts({
                type: 'number',
                name: 'value',
                message: 'How many participant?',
                validate: value => value > 0 ? true : "Please enter an integer"
            });
            let totprice = (value * this.attraction.getPrice());
            console.log("vous devez payer : " + totprice);
            return totprice;
        })();
    }
    //toPay(nbparticipant) {
    //    let totprice = (nbparticipant * Attraction.price);
    //    console.log("vous devez payer : " + totprice);
    //    return totprice;
    //}
}

module.exports = Cashier;