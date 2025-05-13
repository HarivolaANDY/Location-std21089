import java.util.Map;

public class Main {
    public static void main(String[] args) {
        try {
            RentalSystem rentalSystem = new RentalSystem();

            Motorcycle motorcycle1 = new Motorcycle("M1", "Honda CBR", "Honda", "CBR600RR", "600cc");
            Motorcycle motorcycle2 = new Motorcycle("M2", "Yamaha R1", "Yamaha", "R1", "1000cc");
            Bicycle bicycle1 = new Bicycle("B1", "Mountain Bike", "Trek", "X-Caliber", "mountain");
            Bicycle bicycle2 = new Bicycle("B2", "Road Bike", "Specialized", "Tarmac", "road");

            rentalSystem.addItem(motorcycle1);
            rentalSystem.addItem(motorcycle2);
            rentalSystem.addItem(bicycle1);
            rentalSystem.addItem(bicycle2);

            System.out.println("Reserving motorcycle M1 for 5 days...");
            rentalSystem.reserveItem("M1", 5);
            System.out.println("Motorcycle M1 is reserved for 5 days.\n");

            System.out.println("=== AVAILABLE ITEMS ===");
            Map<String, RentalItem> availableMotorcycles = rentalSystem.getAvailableItems();
            System.out.println("Available Motorcycles:");
            for (RentalItem moto : availableMotorcycles.values()) {
                if (moto instanceof Motorcycle) {
                    System.out.println("- " + moto.getName());
                }
            }

            System.out.println("Available Bicycles:");
            for (RentalItem bike : availableMotorcycles.values()) {
                if (bike instanceof Bicycle) {
                    System.out.println("- " + bike.getName());
                }
            }

        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}