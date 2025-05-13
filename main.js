const RentalSystem = require('./RentalSystem');
const Motorcycle = require('./Motorcycle');
const Bicycle = require('./Bicycle');

const rentalSystem = new RentalSystem();

const motorcycle1 = new Motorcycle('M1', 'Honda CBR', 'Honda', 'CBR600RR', 2022, '600cc');
const motorcycle2 = new Motorcycle('M2', 'Yamaha R1', 'Yamaha', 'R1', 2023, '1000cc');
const bicycle1 = new Bicycle('B1', 'Mountain Bike', 'Trek', 'X-Caliber', 2023, 'mountain');
const bicycle2 = new Bicycle('B2', 'Road Bike', 'Specialized', 'Tarmac', 2023, 'road');

try {
    rentalSystem.addItem(motorcycle1);
    rentalSystem.addItem(motorcycle2);
    rentalSystem.addItem(bicycle1);
    rentalSystem.addItem(bicycle2);

    rentalSystem.reserveItem('M1', 5);
    console.log('Motorcycle M1 is reserved for 5 days.\n');

} catch (error) {
    console.error('Setup error:', error.message);
}

console.log('\n=== AVAILABLE ITEMS ===');
console.log('\nAvailable Motorcycles:');
const availableMotorcycles = rentalSystem.getAvailableMotorcycles();
if (availableMotorcycles.length === 0) {
    console.log('No motorcycles available');
} else {
    availableMotorcycles.forEach(moto => {
        console.log(`- ${moto.name} (${moto.brand} ${moto.model})`);
    });
}

console.log('\nAvailable Bicycles:');
const availableBicycles = rentalSystem.getAvailableBicycles();
if (availableBicycles.length === 0) {
    console.log('No bicycles available');
} else {
    availableBicycles.forEach(bike => {
        console.log(`- ${bike.name} (${bike.brand} ${bike.model})`);
    });
}
