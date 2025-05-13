public class Motorcycle extends Vehicle {
    private String engineSize;

    public Motorcycle(String id, String name, String brand, String model, String engineSize) {
        super(id, name, brand, model);
        this.engineSize = engineSize;
    }

    public String getEngineSize() {
        return engineSize;
    }
}
