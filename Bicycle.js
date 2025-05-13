const Vehicle = require('./Vehicle');

class Bicycle extends Vehicle {
    constructor(id, name, brand, model, year, type_de_route) {
        super(id, name, brand, model, year);
        this.type_de_route = type_de_route;
    }

    getStatusMessage() {
        return this.isReserved() ? 'This bicycle is reserved' : 'This bicycle is free';
    }
}

module.exports = Bicycle; 
