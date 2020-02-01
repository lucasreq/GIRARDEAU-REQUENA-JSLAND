const Person = require('./Person');
const Restaurant = require('./Restaurant');
const Client = require('./Client');

class Restaurateur extends Person {
    constructor(firstname, lastname, Restaurant) {
        super();
        super.firstname = firstname;
        super.lastname = lastname;
        this.restaurant = restaurant;
    }

    
}