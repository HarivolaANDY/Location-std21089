from rental_system import RentalSystem
from motorcycle import Motorcycle
from bicycle import Bicycle

def main():
    rental_system = RentalSystem()

    motorcycle1 = Motorcycle("M1", "Honda CBR", "Honda", "CBR600RR", "600cc")
    motorcycle2 = Motorcycle("M2", "Yamaha R1", "Yamaha", "R1", "1000cc")
    bicycle1 = Bicycle("B1", "Mountain Bike", "Trek", "X-Caliber", "mountain")
    bicycle2 = Bicycle("B2", "Road Bike", "Specialized", "Tarmac", "road")

    rental_system.add_item(motorcycle1)
    rental_system.add_item(motorcycle2)
    rental_system.add_item(bicycle1)
    rental_system.add_item(bicycle2)

    print("Reserving motorcycle M1 for 5 days...")
    rental_system.reserve_item("M1", 5)
    print("Motorcycle M1 is reserved for 5 days.\n")

    print("=== AVAILABLE ITEMS ===")
    available_motorcycles = rental_system.get_available_items()
    print("Available Motorcycles:")
    for moto in available_motorcycles.values():
        if isinstance(moto, Motorcycle):
            print(f"- {moto.name} ({moto.brand} {moto.model})")

    print("Available Bicycles:")
    for bike in available_motorcycles.values():
        if isinstance(bike, Bicycle):
            print(f"- {bike.name} ({bike.brand} {bike.model})")

if __name__ == "__main__":
    main()