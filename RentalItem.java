public class RentalItem {
    private String id;
    private String name;
    private String status; // "available" or "reserved"
    private long reservationEndDate;

    public RentalItem(String id, String name) {
        this.id = id;
        this.name = name;
        this.status = "available";
        this.reservationEndDate = 0;
    }

    public boolean isAvailable() {
        return "available".equals(status);
    }

    public boolean isReserved() {
        return "reserved".equals(status);
    }

    public void reserve(int days) throws Exception {
        if (!isAvailable()) {
            throw new Exception("Reservation problem: Item is already reserved");
        }
        this.reservationEndDate = System.currentTimeMillis() + (days * 24 * 60 * 60 * 1000);
        this.status = "reserved";
    }

    public void release() throws Exception {
        if (!isReserved()) {
            throw new Exception("Status problem: Item is not reserved");
        }
        this.status = "available";
        this.reservationEndDate = 0;
    }

    public long getRemainingDays() {
        if (!isReserved()) {
            return 0;
        }
        long remainingTime = reservationEndDate - System.currentTimeMillis();
        return remainingTime / (24 * 60 * 60 * 1000);
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getStatus() {
        return status;
    }
}
