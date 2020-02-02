const Person = require('./Person');
const Attraction = require('./Attraction');
const Cashier = require('./Cashier');
const prompts = require('prompts');

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

        let familly = [`${values}, ${this.firstname} de la famille ${this.lastname}`,values.length + 1]
        return familly
    }

    Req(value) {
        console.log(`Client : Bonjour je voudrais participer à cette fantastique attraction. Je vous présente les membres
        de ma famille. Il y a :` + value)
    }

    payAtt(tot){
        if (this.budget >= tot){
            let value = this.budget - tot;
            this.budget = value;
            console.log("Client : Il me reste : " + value.toFixed(2) + " euros");
        }
        else{
            console.log("Client : désolé je n'ai pas assez de sous")
        }
    }

    async direction() {
        const {direc} = await prompts({
          type:'select',
          name: 'direc',
          message: "Vous êtes au centre du Parc. Où voulez-vous aller?",
          choices: [
            { title: 'Faire une attraction', description: 'FeteDuSlip', value: 'Attraction'},
            { title: 'Aller manger', description: 'LaBaraqueAFrite', value: 'Restaurant'},
            { title: 'Se Plaindre', description: 'Allez en parler au Manager', value: 'Manager'},
            { title: 'Quitter le Parc', value: 'Exit'}
          ],
          initial: 0,
          hint: 'Choisissez votre direction =>'
        });
        return direc;
      };

        
      history(newLieu, newPrix, newEmployee) {
        let history = new Map();
        let lieu = "Dernier lieu";
        let prix = "Prix payé";
        let employee = "Employé";

        history.set(lieu, newLieu);
        history.set(prix, newPrix);
        history.set(employee, newEmployee);

        return history;
      }

      async plainte() {
        const {manage} = await prompts({
            type: 'select',
            name: 'manage',
            message: 'Vers quelle Manager voulez-vous aller?',
            choices: [
                { title: 'Vlad Putin', description: "Manager de l'Attraction", value: 'putin'},
                { title: 'Monsieur Picart', description: "Manager du Restaurant", value: 'picart'}
            ]
        });
        return manage;
    };

}

module.exports = Client;
