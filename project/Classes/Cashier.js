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

    async Pay(familly) {
        const {value} = await prompts({
            type: 'number',
            name: 'value',
            message: `Cashier : Enchanté ${familly}, combien veulent participer a cette attraction ? `,
            validate: value => value > 0 ? true : "Please enter an integer",
        });
        let totprice = (value * this.attraction.getPrice());
        console.log("Cashier : vous devez payer : " + totprice);
        let totvalue = [totprice,value]
        return totvalue;
    }

    PlacesManage(tot){
        let douille = (tot / this.attraction.getPrice());
        let places = this.attraction.place - douille;
        console.log("Cashier : Il reste " + places + " places dans cette attraction");
        if (places > this.attraction.place){
            console.log("Cashier : Désolé il n'y a pas assez de places")
        }
        else{
            console.log("Cashier : Vous pouvez passer")
        }
    }
}

module.exports = Cashier;