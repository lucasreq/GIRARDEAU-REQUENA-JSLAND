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

        let familly = [`${values}, ${this.firstname} de la famille ${this.lastname}`,values.length]
        return familly
    }

    Req(value) {
        console.log(`Client : Bonjour je voudrais participer à cette fantastique attraction. Je vous présente les membres
        de ma famille. Il y a :` + value)
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

    async Direction() {
        const {Direc} = await prompts({
          type:'select',
          name: 'Direc',
          message: "Vous êtes au centre du Parc. Où voulez-vous aller?",
          choices: [
            { title: 'Faire une attraction', description: 'FeteDuSlip', value: 'Attraction'},
            { title: 'Aller manger', description: 'LaBaraqueAFrite', value: 'Restaurant'}
          ],
          initial: 0,
          hint: 'Choisissez votre direction =>'
        });
        return Direc
      };

}

module.exports = Client;
