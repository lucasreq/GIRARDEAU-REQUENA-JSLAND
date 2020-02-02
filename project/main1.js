const Client = require('./Classes/Client');
const Manager = require('./Classes/Manager');
const Cashier = require('./Classes/Cashier');
const Attraction = require('./Classes/Attraction');
const Restaurant = require('./Classes/Restaurant');
const Restaurateur = require('./Classes/Restaurateur');
const sleep = require('system-sleep');

let billy = new Client("Billy","Croquette",100);
let feteDuSlip = new Attraction("Feteduslip",2,rand(100),Cashier);
let cashierr = new Cashier("tommy","Weinstein",feteDuSlip);
let laBaraqueAFrite = new Restaurant("LaBaraqueAFrite",Restaurateur, 2.5,4);
let cuisto = new Restaurateur("Gordon", "Ramsay", laBaraqueAFrite);
let vladPutin = new Manager('Vlad','Putin', cashierr);
let picart = new Manager('Patrick','Picart', cuisto);


let pass = 'Visit';
let history = undefined;

function rand(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

async function main() {
    const dir = await billy.direction();
    let tot = undefined;
    switch (dir) {
        case 'Attraction':
            const family = await billy.Hello();
            tot = await cashierr.pay(family[0]);
            if (family[1] < tot[1]) {
				console.log(`Cashier : Vous n'etes que ${family[1]} vous ne pouvez pas prendre ${tot[1]} places`);
			}
			else {
				console.log("Cashier : vous devez payer " + tot[0] + " €.");
				billy.payAtt(tot[0]);
				if (billy.budget > tot[0]) {
					cashierr.placesManage(tot[0]);
					history = await billy.history(cashierr.attraction.name, tot[0], cashierr.firstname);
					pass = "Visit";
				} else {
					console.log('Cashier : Vous ne pouvez pas passer');
				}
				break;
			}
        case 'Restaurant':
			tot = await cuisto.command();
			billy.history(Restaurant, tot);
			billy.payAtt(tot);
			history = await billy.history(cuisto.restaurant.name, tot, cuisto.firstname);
            pass = "Visit";
            break;
        default:
			break;
		case 'Manager':
			if (history != undefined) {
				// console.log(history); // Dico de l'historique
				// console.log(history.get("Dernier lieu")); // Nom du dernier Batiment
				// console.log(history.get("Prix payé"));	// Prix de la Derniere Transaction
				// console.log(history.get("Employé")); // Nom de l'employé
				
				const man = await billy.plainte();
				switch (man) {
					case 'putin':
						remboursement = await vladPutin.plainte(history.get("Dernier lieu"), history.get("Employé"), history.get("Prix payé"));
						billy.budget = billy.budget + remboursement;
					case 'picart':
						remboursement = await picart.plainte(history.get("Dernier lieu"), history.get("Employé"), history.get("Prix payé"));
						billy.budget = billy.budget + remboursement;
				}
				

			}
			else {
				console.log("Vous ne pouvez pas vous plaindre avant meme de tester notre Parc !")
			}
		case 'Exit':
			console.log("*** Il vous reste "+ billy.budget+" € ***");
			console.log("Merci d'etre passé dans notre Parc ! A la Prochaine !");
			process.exit();
    }
}

(async () => {
    while (billy.budget > 0) {
        console.log(pass) // Si pass === Nothing alors boucle infini...
        if (pass == "Visit") {
            pass = 'Nothing';
            await main();
        }
    }
})()