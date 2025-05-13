const Vehicle = require('./Vehicle');

class Motorcycle extends Vehicle {
    constructor(id, name, brand, model, year, engineSize) {
        super(id, name, brand, model, year);
        this.engineSize = engineSize;
    }

    getStatusMessage() {
        return this.isReserved() ? 'This motorcycle is reserved' : 'This motorcycle is free';
    }
}

module.exports = Motorcycle; 
