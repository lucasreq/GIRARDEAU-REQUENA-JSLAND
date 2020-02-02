const Client = require('./Classes/Client');
const Manager = require('./Classes/Manager');
const Cashier = require('./Classes/Cashier');
const Attraction = require('./Classes/Attraction');
const Restaurant = require('./Classes/Restaurant');
const Restaurateur = require('./Classes/Restaurateur');
const Person = require('./Classes/Person');
const sleep = require('system-sleep');

let family = ["Billy", "Michel", "Julia"];
let money = [100, 0, 0];
for (i = 0; i < family.length; i++) {
    family[i] = new Client(family[i],"Croquette",money[i]);
};

let attrac = ["montagnesRusses", "maisonHante", "chaisesVolantes", "palaisDesGlaces"];
let priceA = [5, 4.5, 2, 10];
let change = 2;
let place = [100, change, 100, 100];
for (i = 0; i < attrac.length; i++) {
    attrac[i] = new Attraction(attrac[i],priceA[i], place[i], Cashier);
};

let restau = ["Pattiya", "Sturbacks Tea"];
let priceR = [12, 4.5];
for (i = 0; i < restau.length; i++) {
    restau[i] = new Restaurant(restau[i], Restaurateur, priceR[i]);
};

let cuisto = new Restaurateur("Miguel", "Ramsay", restau[0]);
let cashierr = new Cashier("tommy","Weinstein",attrac[3]);
let vladPutin = new Manager('Vlad','Putin', cashierr);
let picart = new Manager('Patrick','Picart', cuisto);
let mascotte = new Person('Bobby', 'Lafrite');


let tot = undefined;


// SCRIPT //
async function main() {
    console.log("** Vous patientez dans la queue.. **");
    sleep(1000);
    console.log("**Vous entrez dans le Parc et vous ous dirigez vers votre première attraction.. Les "+attrac[0].name+" ! **");
    console.log("** Vous etes maintenant au comptoir et attendez votre tour **");
    sleep(2000);
    tot = await cashierr.pay(family[0].firstname);    // ==> Input demandé === 3
    console.log();
    if (family.length < tot[1]) {
        console.log(`Cashier : Vous n'etes que 3 vous ne pouvez pas prendre ${tot[1]} places`);
    }
    else {
        console.log("Cashier : vous devez payer " + tot[0] + " €.");
        family[0].payAtt(tot[0]);
        if (family[0].budget > tot[0]) {
            cashierr.placesManage(tot[0]);
        } else {
            console.log('Cashier : Vous ne pouvez pas passer');
        }
    }
    console.log("** Vous montez dans l'Attraction et vous vous préparez mentalement .. **");
    sleep(1750);
    console.log("** "+family[1].firstname+", le Benjamin de la famille se retrouve à vomir ses trippes dès la sortie du Wagon **");
    console.log("** Maintenant, direction la "+attrac[1].name+" ! **");
    sleep(1560);
    console.log("** Après la queue, nous pouvons enfin prendre nos tickets **");

    // ***** PARTIE TEST DISPO ATTRAC[1] REFUS ***** //
    console.log("Cashier : Desolé nous n'avons plus de place pour ce tour-ci.. Revenez plus tard !");

    // ***** PARTIE MASCOTTE (nouveau fichier deduisant un prix /Barbe a papa?) ***** //
    console.log("** En attendant, vous décidez d'offrir une barbe à Papa à toute la famille et la dégustez en compagnie de la Mascotte, "+mascotte.firstname+' '+mascotte.lastname+' ! **');
    sleep(3000);

    // ***** PARTIE TEST DISPO ATTRAC[1] ACCEPT ***** //
    console.log("** Vous décidez finalement de retourner à la "+attrac[1].name+" **");
    if (family.length < tot[1]) {
        console.log(`Cashier : Vous n'etes que 3 vous ne pouvez pas prendre ${tot[1]} places`);
    }
    else {
        console.log("Cashier : vous devez payer " + tot[0] + " €.");
        family[0].payAtt(tot[0]);           
        if (family[0].budget > tot[0]) {
            cashierr.placesManage(tot[0]);
        } else {
            console.log('Cashier : Vous ne pouvez pas passer');
        }
    }
    sleep(5000);
    console.log("** Apres cette montée d'Adrénaline, nos estomacs crient faminent.. Direction "+restau[0].name+" **");

    // ***** PARTIE RESTAU PATTIYA -> err sur menPrice ***** //
    tot = await cuisto.command();   // ==> Input demandé === 3 puis === 3 0
    while (tot === undefined) {
        tot = await cuisto.command();
    }
    sleep(2000);
    console.log("** Le repas vient d'arriver... Miam ! **");
    sleep(5000);
    console.log("** Nous réglons la note et partons vers de nouvelles aventures ! **");
    family[0].payAtt(tot);

}

main();

