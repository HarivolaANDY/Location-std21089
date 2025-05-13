require_relative 'rental_item'

class Vehicle < RentalItem
  attr_accessor :brand, :model

  def initialize(id, name, brand, model)
    super(id, name)
    @brand = brand
    @model = model
  end
end
