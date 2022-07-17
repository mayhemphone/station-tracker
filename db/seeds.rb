animals = [
  {
    name: 'Wolf',
    motto: 'Be Tranpsarent.',
  },
  {
    name: 'Whino',
    motto: 'Drink Wine.',
  },
]

animals.each do |animal|
  Animal.find_or_create_by!(name: animal[:name], motto: animal[:motto])
end
