const Person = require('./Person')

class Manager extends Person{
    constructor(firstname, lastname){
        super();
        super.firstname = firstname;
        super.lastname = lastname;
    }
}

module.exports = Manager;