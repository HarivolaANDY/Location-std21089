const RentalItem = require('./RentalItem');

class Vehicle extends RentalItem {
    constructor(id, name, brand, model, year) {
        super(id, name);
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.wheels = 2;
    }

    getVehicleInfo() {
        return {
            id: this.id,
            name: this.name,
            brand: this.brand,
            model: this.model,
            year: this.year,
            wheels: this.wheels,
            status: this.status
        };
    }
}

module.exports = Vehicle; 
