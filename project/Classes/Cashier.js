const Person = require('./Person');
const Attraction = require('./Attraction');
const Client = require('./Client');
const prompts = require('prompts');
const keysend = require('node-key-sender');

class Cashier extends Person{
    constructor(firstname, lastname, attraction){
        super();
        super.firstname = firstname;
        super.lastname = lastname;
        this.attraction = attraction;
    }

    async pay(familly) {
        const {value} = await prompts({
            type: 'number',
            name: 'value',
            message: `Cashier : Enchanté ${familly}, combien veulent participer a cette attraction ? `,
            initial: 3,
            validate: value => value > 0 ? true : "Please enter an integer",
        });
        let totprice = (value * this.attraction.getPrice());
        let totvalue = [totprice,value];
        return totvalue;
    }

    placesManage(tot){
        let douille = (tot / this.attraction.getPrice());
        let places = this.attraction.place - douille;
        console.log("Cashier : Il reste " + places + " places dans cette attraction");
        if (places > this.attraction.place){
            console.log("Cashier : Désolé il n'y a pas assez de places");
        }
        else{
            console.log("Cashier : Vous pouvez passer");
        }
    }

    async pay2(familly) {
        const {value} = await prompts({
            type: 'number',
            name: 'value',
            message: `Cashier : Enchanté ${familly}, combien veulent participer a cette attraction ? `,
            initial: 3,
            validate: value => value > 0 ? true : "Please enter an integer",
        });
        //keysend.sendKey("@9");
        //keysend.sendKey("@10");
        let totprice = (value * this.attraction.getPrice());
        let totvalue = [totprice,value];
        return totvalue;
    }
}

module.exports = Cashier;