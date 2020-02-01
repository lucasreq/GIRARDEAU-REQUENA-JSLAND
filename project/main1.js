const Client = require('./Classes/Client');
const Manager = require('./Classes/Manager');
const Cashier = require('./Classes/Cashier');
const Attraction = require('./Classes/Attraction');
const Restaurant = require('./Classes/Restaurant');

let Billy = new Client("Billy","Croquette",100);
let Feteduslip = new Attraction("FeteDuSlip",2,100,Cashier);
let Cashierr = new Cashier("Tommy","Weinstein",Feteduslip);
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