from vehicle import Vehicle

class Bicycle(Vehicle):
    def __init__(self, id, name, brand, model, bike_type):
        super().__init__(id, name, brand, model)
        self.bike_type = bike_type

    def get_bike_type(self):
        return self.bike_type