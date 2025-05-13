require_relative 'vehicle'

class Motorcycle < Vehicle
  attr_accessor :engine_size

  def initialize(id, name, brand, model, engine_size)
    super(id, name, brand, model)
    @engine_size = engine_size
  end
end
