const Client = require('./Classes/Client');
const Manager = require('./Classes/Manager');
const Cashier = require('./Classes/Cashier');
const Attraction = require('./Classes/Attraction');
const Restaurant = require('./Classes/Restaurant');
const Restaurateur = require('./Classes/Restaurateur');
const sleep = require('system-sleep');

let billy = new Client("Billy","Croquette",100);
let feteDuSlip = new Attraction("Feteduslip",2,100,Cashier);
let cashierr = new Cashier("tommy","Weinstein",feteDuSlip);
let laBaraqueAFrite = new Restaurant("LaBaraqueAFrite",Restaurateur, 2.5,4);
let cuisto = new Restaurateur("Gordon", "Ramsay", laBaraqueAFrite);
let vladPutin = new Manager('Vlad','Putin', cashierr);


let pass = 'Visit';

async function main() {
    const dir = await billy.direction()
    let tot = undefined
    switch (dir) {
        case 'Attraction':
            const family = await billy.Hello()
            tot = await cashierr.pay(family[0])
            if (family[1] < tot[1]) {
                console.log(`Vous n'etes que ${family[1]} vous ne pouvez pas prendre ${tot[1]} places`);
			}
			else {
				console.log("Cashier : vous devez payer " + tot[0] + " €.");
				billy.payAtt(tot[0]);
				if (billy.budget > tot[0]) {
					cashierr.placesManage(tot[0]);
					pass = "Visit";
				} else {
					console.log('Vous ne pouvez pas passer');
				}
				break;
			}
        case 'Restaurant':
            tot = await cuisto.command()
            billy.payAtt(tot);
            pass = "Visit";
            break;
        default:
            break;
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