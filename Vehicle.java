public class Vehicle extends RentalItem {
    private String brand;
    private String model;

    public Vehicle(String id, String name, String brand, String model) {
        super(id, name);
        this.brand = brand;
        this.model = model;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }
}
