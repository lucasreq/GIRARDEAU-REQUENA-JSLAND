const Person = require('./Person');
const Attraction = require('./Attraction');
const Cashier = require('./Cashier');
const prompts = require('prompts')

class Client extends Person{
    constructor(firstname,lastname,budget) {
        super();
        super.firstname = firstname;
        super.lastname = lastname;
        this.budget = budget;
    }

    PayMen(){
        console.log("Voici");
    }

    async Hello() {
        const {values} = await prompts({
            type: 'list',
            name: 'values',
            message: `Client : Bonjour je voudrais participer à cette fantastique attraction. Je vous présente les membres de ma famille, il y a : `,
            initial: '',
            separator: ' '
        });

        let familly = values + ',' + this.firstname + ' de la famille ' + this.lastname
        return familly
    }

    Req(value) {
        console.log(       console.log(`Client : Bonjour je voudrais participer à cette fantastique attraction. Je vous présente les membres
        de ma famille. Il y a :` + value)
        )
    }

    payAtt(tot){
        if (this.budget > tot){
            let value = this.budget - tot;
            this.budget = value;
            console.log("Client : Il me reste : " + value + " euros");
        }
        else{
            console.log("Client : désolé je n'ai pas assez de sous")
        }
    }

}

module.exports = Client;
