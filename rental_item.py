class RentalItem:
    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.status = 'available' 
        self.reservation_end_date = None

    def is_available(self):
        return self.status == 'available'

    def is_reserved(self):
        return self.status == 'reserved'

    def reserve(self, days):
        if not self.is_available():
            raise Exception("Reservation problem: Item is already reserved")
        self.reservation_end_date = days 
        self.status = 'reserved'

    def release(self):
        if not self.is_reserved():
            raise Exception("Status problem: Item is not reserved")
        self.status = 'available'
        self.reservation_end_date = None

    def get_remaining_days(self):
        if not self.is_reserved():
            return 0
        return self.reservation_end_date

    def get_info(self):
        return {
            'id': self.id,
            'name': self.name,
            'status': self.status
        }