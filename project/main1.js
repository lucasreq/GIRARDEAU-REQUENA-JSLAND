const Client = require('./Classes/Client');
const Manager = require('./Classes/Manager');
const Cashier = require('./Classes/Cashier');
const Attraction = require('./Classes/Attraction');
const Restaurant = require('./Classes/Restaurant');
const Restaurateur = require('./Classes/Restaurateur');

let Billy = new Client("Billy","Croquette",100);
<<<<<<< HEAD
let Feteduslip = new Attraction("Feteduslip",2,100,Cashier);
let Cashierr = new Cashier("tommy","Weinstein",Feteduslip);
let LaBaraqueAFrite = new Restaurant("LaBaraqueAFrite",Restaurateur, 2.5,4);
let Cuisto = new Restaurateur("Gordon", "Ramsay", LaBaraqueAFrite);
=======
let Feteduslip = new Attraction("FeteDuSlip",2,100,Cashier);
let Cashierr = new Cashier("Tommy","Weinstein",Feteduslip);
let VladPutin = new Manager('Vlad','Putin', Cashierr)
>>>>>>> 22a18396445bfc47d6d54cb74a9f7a33446b0e97


<<<<<<< HEAD
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
=======
Billy.Hello().then(familly => {
    Cashierr.Pay(familly).then(tot =>{
        Billy.payAtt(tot);
        if (Billy.budget > tot){
            Cashierr.PlacesManage(tot);
        }
        else{
            console.log('Vous ne pouvez pas passer')
        }
    });
});
>>>>>>> 22a18396445bfc47d6d54cb74a9f7a33446b0e97
