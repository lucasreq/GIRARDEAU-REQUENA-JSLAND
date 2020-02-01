const Person = require('./Person')

class Manager extends Person{
    constructor(firstname, lastname, employees){
        super();
        super.firstname = firstname;
        super.lastname = lastname;
        this.employees = employees;
    }
}

module.exports = Manager;