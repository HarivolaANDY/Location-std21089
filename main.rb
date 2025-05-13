require_relative 'rental_system'
require_relative 'motorcycle'
require_relative 'bicycle'

def main
  rental_system = RentalSystem.new

  motorcycle1 = Motorcycle.new("M1", "Honda CBR", "Honda", "CBR600RR", "600cc")
  motorcycle2 = Motorcycle.new("M2", "Yamaha R1", "Yamaha", "R1", "1000cc")
  bicycle1 = Bicycle.new("B1", "Mountain Bike", "Trek", "X-Caliber", "mountain")
  bicycle2 = Bicycle.new("B2", "Road Bike", "Specialized", "Tarmac", "road")

  rental_system.add_item(motorcycle1)
  rental_system.add_item(motorcycle2)
  rental_system.add_item(bicycle1)
  rental_system.add_item(bicycle2)

  puts "Reserving motorcycle M1 for 5 days..."
  rental_system.reserve_item("M1", 5)
  puts "Motorcycle M1 is reserved for 5 days.\n"

  puts "=== AVAILABLE ITEMS ==="
  available_motorcycles = rental_system.available_items.select { |item| item.is_a?(Motorcycle) }
  puts "Available Motorcycles:"
  available_motorcycles.each do |moto|
    puts "- #{moto.name} (#{moto.brand} #{moto.model})"
  end

  available_bicycles = rental_system.available_items.select { |item| item.is_a?(Bicycle) }
  puts "Available Bicycles:"
  available_bicycles.each do |bike|
    puts "- #{bike.name} (#{bike.brand} #{bike.model})"
  end
end

main
