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

let tot = 0;

Billy.Hello();
// Cashierr.Pay().then(tot => {
//     Billy.payAtt(tot)
//   })

Cuisto.Command()

// if (tot > 0){
//     Billy.payAtt(tot)
// }
// else{
//     console.log(tot)
// }