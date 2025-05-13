class RentalItem {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.status = 'available';
        this.reservationEndDate = null;
    }

    isAvailable() {
        return this.status === 'available';
    }

    isReserved() {
        return this.status === 'reserved';
    }

    reserve(days) {
        if (!this.isAvailable()) {
            throw new Error('Reservation problem: Item is already reserved');
        }

        const endDate = new Date();
        endDate.setDate(endDate.getDate() + days);
        this.reservationEndDate = endDate;
        this.status = 'reserved';
    }

    release() {
        if (!this.isReserved()) {
            throw new Error('Status problem: Item is not reserved');
        }

        this.status = 'available';
        this.reservationEndDate = null;
    }

    getRemainingDays() {
        if (!this.isReserved()) {
            return 0;
        }

        const now = new Date();
        const diffTime = this.reservationEndDate - now;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    getVehicleInfo() {
        return {
            id: this.id,
            name: this.name,
            status: this.status
        };
    }
}

module.exports = RentalItem; 
