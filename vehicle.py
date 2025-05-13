from rental_item import RentalItem

class Vehicle(RentalItem):
    def __init__(self, id, name, brand, model):
        super().__init__(id, name)
        self.brand = brand
        self.model = model

    def get_brand(self):
        return self.brand

    def get_model(self):
        return self.model