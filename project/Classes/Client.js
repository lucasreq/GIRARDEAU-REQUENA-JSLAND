const Person = require('./Person');
const Attraction = require('./Attraction');
const Cashier = require('./Cashier');

class Client extends Person{
    constructor(firstname,lastname,budget) {
        super();
        super.firstname = firstname;
        super.lastname = lastname;
        this.budget = budget;
    }

    PayAttraction(){
        console.log("Voici");
    }

    Hello() {
        console.log("Bonjour je suis " + this.firstname + " " + this.lastname + " et j'ai " + this.budget + " €.")
    }


    payAtt(tot){
        (async () => {
            let {value} = await (tot - this.budget);
            console.log(value)
        })();
    }


}

module.exports = Client;
