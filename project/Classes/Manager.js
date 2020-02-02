const Person = require('./Person')

class Manager extends Person{
    constructor(firstname, lastname, employees){
        super();
        super.firstname = firstname;
        super.lastname = lastname;
        this.employees = employees;
    }

    plainte(lieu, employee, price) {
        let remboursement = 0;
        if (this.employees.firstname == employee) {
            console.log("Manager : Quoi ?! Votre derniere expérience au "+lieu+" avec "+this.employees.firstname+ ' ' +this.employees.lastname+" ne vous a pas convaincu ?? Laissez moi vous dédommager. Tenez voilà "+price+" euros.");
            remboursement = price;
        }
        else {
            console.log("Manager : Je ne connais pas cet employé, je ne suis pas son manager");
        }
        return remboursement;
    }
}

module.exports = Manager;