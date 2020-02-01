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
let VladPutin = new Manager('Vlad','Putin', Cashierr)



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
