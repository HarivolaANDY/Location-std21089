import java.util.HashMap;
import java.util.Map;

public class RentalSystem {
    private Map<String, RentalItem> items;

    public RentalSystem() {
        items = new HashMap<>();
    }

    public void addItem(RentalItem item) throws Exception {
        if (items.containsKey(item.getId())) {
            throw new Exception("Item with this ID already exists");
        }
        items.put(item.getId(), item);
    }

    public RentalItem getItem(String id) throws Exception {
        RentalItem item = items.get(id);
        if (item == null) {
            throw new Exception("Item not found");
        }
        return item;
    }

    public void reserveItem(String id, int days) throws Exception {
        RentalItem item = getItem(id);
        item.reserve(days);
    }

    public void releaseItem(String id) throws Exception {
        RentalItem item = getItem(id);
        item.release();
    }

    public Map<String, RentalItem> getAvailableItems() {
        Map<String, RentalItem> availableItems = new HashMap<>();
        for (RentalItem item : items.values()) {
            if (item.isAvailable()) {
                availableItems.put(item.getId(), item);
            }
        }
        return availableItems;
    }
}