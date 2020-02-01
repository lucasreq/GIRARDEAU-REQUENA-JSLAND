const Client = require('./Classes/Client');
const Manager = require('./Classes/Manager');
const Cashier = require('./Classes/Cashier');
const Attraction = require('./Classes/Attraction');
const Restaurant = require('./Classes/Restaurant');
const Restaurateur = require('./Classes/Restaurateur');

let Billy = new Client("Billy","Croquette",100);
let Feteduslip = new Attraction("Feteduslip",2,100,Cashier);
let Cashierr = new Cashier("tommy","Weinstein",Feteduslip);
let LaBaraqueAFrite = new Restaurant("LaBaraqueAFrite",Restaurateur, 2.5,4);
let Cuisto = new Restaurateur("Gordon", "Ramsay", LaBaraqueAFrite);
let VladPutin = new Manager('Vlad','Putin', Cashierr);

// let Pass = 'Visit'

// function Main() {
	Billy.Direction().then(Direc => {
			if (Direc == 'Attraction') {
				Billy.Hello().then(familly => {
					Cashierr.Pay(familly[0]).then(tot =>{
							if(familly[1] >= tot[1]){
								console.log("Cashier : vous devez payer : " + tot[1]);
								Billy.payAtt(tot[0]);
								if (Billy.budget > tot[0]){
									Cashierr.PlacesManage(tot[0]);
								}
								else{
									console.log('Vous ne pouvez pas passer');
								}
							}
							else{
								console.log(`Vous n'etes que ${familly[1]} vous ne pouvez pas prendre ${tot[1]} places`);
							}
					});
				});
			}
			else if (Direc == 'Restaurant') {
				Cuisto.Command().then(tot => {
					// Pass = 'Visit';
					Billy.payAtt(tot);
					// Billy.Direction(); -> pas utile dans la boucle normalement
				})
			}
	});
// }

// while (Billy.budget > 0) {
// 	if (Pass == "Visit") {
// 		Pass = 'Nothing';
// 		Main();
// 	}
// 	else {
// 		continue;
// 	}
// }


