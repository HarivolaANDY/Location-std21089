const Vehicle = require('./Vehicle');
const Motorcycle = require('./Motorcycle');
const Bicycle = require('./Bicycle');

class RentalSystem {
    constructor() {
        this.items = new Map();
    }

    addItem(item) {
        if (!(item instanceof Vehicle)) {
            throw new Error('Only vehicles can be added to the rental system');
        }
        if (this.items.has(item.id)) {
            throw new Error('Item with this ID already exists');
        }
        this.items.set(item.id, item);
    }

    removeItem(id) {
        if (!this.items.has(id)) {
            throw new Error('Item not found');
        }
        this.items.delete(id);
    }

    getItem(id) {
        const item = this.items.get(id);
        if (!item) {
            throw new Error('Item not found');
        }
        return item;
    }

    reserveItem(id, days) {
        const item = this.getItem(id);
        item.reserve(days);
    }

    releaseItem(id) {
        const item = this.getItem(id);
        item.release();
    }

    getAvailableItems() {
        return Array.from(this.items.values()).filter(item => item.isAvailable());
    }

    getReservedItems() {
        return Array.from(this.items.values()).filter(item => item.isReserved());
    }

    getItemStatus(id) {
        const item = this.getItem(id);
        return {
            ...item.getVehicleInfo(),
            remainingDays: item.getRemainingDays()
        };
    }

    getMotorcycles() {
        return Array.from(this.items.values())
            .filter(item => item instanceof Motorcycle);
    }

    getBicycles() {
        return Array.from(this.items.values())
            .filter(item => item instanceof Bicycle);
    }

    getAvailableMotorcycles() {
        return this.getMotorcycles()
            .filter(item => item.status === 'available');
    }

    getAvailableBicycles() {
        return this.getBicycles()
            .filter(item => item.status === 'available');
    }
}

module.exports = RentalSystem; 
