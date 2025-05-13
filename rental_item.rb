class RentalItem
    attr_accessor :id, :name, :status, :reservation_end_date
  
    def initialize(id, name)
      @id = id
      @name = name
      @status = 'available'
      @reservation_end_date = nil
    end
  
    def available?
      @status == 'available'
    end
  
    def reserved?
      @status == 'reserved'
    end
  
    def reserve(days)
      raise 'Reservation problem: Item is already reserved' unless available?
  
      @reservation_end_date = days
      @status = 'reserved'
    end
  
    def release
      raise 'Status problem: Item is not reserved' unless reserved?
  
      @status = 'available'
      @reservation_end_date = nil
    end
  
    def remaining_days
      return 0 unless reserved?
  
      @reservation_end_date
    end
  
    def info
      { id: @id, name: @name, status: @status }
    end
  end
