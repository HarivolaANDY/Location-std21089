class RentalSystem:
    def __init__(self):
        self.items = {}

    def add_item(self, item):
        if item.id in self.items:
            raise Exception("Item with this ID already exists")
        self.items[item.id] = item

    def get_item(self, id):
        if id not in self.items:
            raise Exception("Item not found")
        return self.items[id]

    def reserve_item(self, id, days):
        item = self.get_item(id)
        item.reserve(days)

    def release_item(self, id):
        item = self.get_item(id)
        item.release()

    def get_available_items(self):
        return {id: item for id, item in self.items.items() if item.is_available()}

    def get_reserved_items(self):
        return {id: item for id, item in self.items.items() if item.is_reserved()}