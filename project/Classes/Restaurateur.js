const Person = require('./Person');
const Restaurant = require('./Restaurant');
const Client = require('./Client');
const prompts = require('prompts');

class Restaurateur extends Person {
    constructor(firstname, lastname, restaurant) {
        super();
        super.firstname = firstname;
        super.lastname = lastname;
        this.restaurant = restaurant;
    }

    async command() {
        const {q1} = await prompts({
            type: 'number',
            name: 'q1',
            initial: 3,
            message: 'Restaurateur : Ah Bonjour ! Combien êtes-Vous?',
            initial: 3,
            validate: q1 => q1 > 0 ? true : "Ce n'est pas un nombre exact"
        });
        const {q2} = await prompts({
            type: 'list',
            name: 'q2',
            message: "Restaurateur : Très bien, vous êtes donc "+q1+". Combien y aura t-il de menus 1 ? Et combien de menus 2 ?",
            initial: '3 0',
            separator: ' ',
            validate: q2 => (q2[0] !== 0) || (q2[1] !== 0) ? true : "Restaurateur : Euh... J'attend toujours.. Combien de Menu 1 et de Menu 2?"
        });
        let menPrice = undefined;
        if (parseInt(q2[0])+ parseInt(q2[1]) != q1) {
            console.log("Restaurateur : J'ai du mal noter quelque chose... On recommence !");
        }
        else {
            let men1 = q2[0];
            let men2 = q2[1];
            menPrice = ((men1 * this.restaurant.getPriceM1())+(men2 * this.restaurant.getPriceM2()));
            console.log('Restaurateur : Tres bien, donc '+q2[0]+' Menu1 et '+q2[1]+' Menu2.');
            let now = new Date();
            if (12 <= parseInt(now.getHours()) && parseInt(now.getHours()) <= 14) {
                menPrice = menPrice * 0.8;
                console.log("Restaurateur : C'est l'Happy Hour ! Nous vous offrons 20% de remise sur votre commande !");
            }
            console.log('Restaurateur : Ca vous fera '+menPrice+" € s'il vous plait !");
            let dessert = 0;
            function rand(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            for (let i = 0; i < q1; i++) {
                if (rand(q1)==0) {
                    dessert +=1;
                }
            }
            if (dessert != 0) {
                console.log("Pour vous remercier d'avoir mangé chez nous, nous vous offrons "+dessert+" Dessert(s) ! Régalez-vous !")
            }
            return menPrice;
        }
    }

}

module.exports = Restaurateur;