class RentalSystem
    def initialize
      @items = {}
    end
  
    def add_item(item)
      raise 'Item with this ID already exists' if @items.key?(item.id)
  
      @items[item.id] = item
    end
  
    def get_item(id)
      raise 'Item not found' unless @items.key?(id)
  
      @items[id]
    end
  
    def reserve_item(id, days)
      item = get_item(id)
      item.reserve(days)
    end
  
    def release_item(id)
      item = get_item(id)
      item.release
    end
  
    def available_items
      @items.values.select(&:available?)
    end
  
    def reserved_items
      @items.values.select(&:reserved?)
    end
  end
  