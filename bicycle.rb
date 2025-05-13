require_relative 'vehicle'

class Bicycle < Vehicle
  attr_accessor :type

  def initialize(id, name, brand, model, type)
    super(id, name, brand, model)
    @type = type
  end
end
