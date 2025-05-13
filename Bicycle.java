public class Bicycle extends Vehicle {
    private String type;

    public Bicycle(String id, String name, String brand, String model, String type) {
        super(id, name, brand, model);
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
