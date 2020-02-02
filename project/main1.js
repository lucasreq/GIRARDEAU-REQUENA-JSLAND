const Client = require('./Classes/Client');
const Manager = require('./Classes/Manager');
const Cashier = require('./Classes/Cashier');
const Attraction = require('./Classes/Attraction');
const Restaurant = require('./Classes/Restaurant');
const Restaurateur = require('./Classes/Restaurateur');
const sleep = require('system-sleep');

let Billy = new Client("Billy","Croquette",100);
let Feteduslip = new Attraction("Feteduslip",2,100,Cashier);
let Cashierr = new Cashier("tommy","Weinstein",Feteduslip);
let LaBaraqueAFrite = new Restaurant("LaBaraqueAFrite",Restaurateur, 2.5,4);
let Cuisto = new Restaurateur("Gordon", "Ramsay", LaBaraqueAFrite);
let VladPutin = new Manager('Vlad','Putin', Cashierr);


let Pass = 'Visit';

async function main() {
    const dir = await Billy.Direction()
    let tot = undefined
    switch (dir) {
        case 'Attraction':
            const family = await Billy.Hello()
            tot = await Cashierr.Pay(family[0])
            if (family[1] < tot[1]) {
                console.log(`Vous n'etes que ${family[1]} vous ne pouvez pas prendre ${tot[1]} places`);
            }
            console.log("Cashier : vous devez payer : " + tot[1]);
            Billy.payAtt(tot[0]);
            if (Billy.budget > tot[0]) {
				Cashierr.PlacesManage(tot[0]);
				Pass = "Visit";
            } else {
                console.log('Vous ne pouvez pas passer');
            }
            break;
        case 'Restaurant':
            tot = await Cuisto.Command()
            Billy.payAtt(tot);
            Pass = "Visit";
            break;
        default:
            break;
    }
}

(async () => {
    while (Billy.budget > 0) {
        console.log(Pass) // Si Pass === Nothing alors boucle infini...
        if (Pass == "Visit") {
            Pass = 'Nothing';
            await main();
        }
    }
})()