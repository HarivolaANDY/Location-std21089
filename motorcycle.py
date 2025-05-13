from vehicle import Vehicle

class Motorcycle(Vehicle):
    def __init__(self, id, name, brand, model, engine_size):
        super().__init__(id, name, brand, model)
        self.engine_size = engine_size

    def get_engine_size(self):
        return self.engine_size