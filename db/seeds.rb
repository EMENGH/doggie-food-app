# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require_relative './food_data.rb'
# require_relative './dog_data.rb'

Food.destroy_all
Dog.destroy_all


shihtzu = Dog.new(name: "Ozzie", breed: "Shih Tzu",size: "small", photo_url: "https://i.imgur.com/5dFPvBG.jpg")
husky = Dog.new(name: "Koby", breed: "Husky", size: "big", photo_url: "https://i.imgur.com/rdxk3Y3.jpg")
australian_shepherd = Dog.new(name: "Sky", breed: "Australian Shepherd mix", size: "medium", photo_url: "https://i.imgur.com/AX8zDyn.jpg")
labrador = Dog.new(name: "trampas", breed: "labrador", size: "medium", photo_url: "https://i.imgur.com/aaFS4AK.jpg")
dalmatian = Dog.new(name: "one-zero-one", breed: "dalmatian", size: "medium", photo_url: "https://i.imgur.com/kvOW10d.png")
saintbernard = Dog.new(name: "bigjimmy", breed: "saint bernard", size: "big", photo_url: "https://imgur.com/EE6ZSB5.jpg")
chihuahua = Dog.new(name: "minime", breed: "chihuahua", size: "small", photo_url: "https://i.imgur.com/Bex4qrs.jpg")
spaniel = Dog.new(name: "motas", breed: "spaniel", size: "medium", photo_url: "https://i.imgur.com/AE8oyFU.jpg")
collie = Dog.new(name: "lassie", breed: "collie", size: "big", photo_url: "https://i.imgur.com/HiEOygR.jpg") 
akita = Dog.new(name: "bigjoe", breed: "akita", size: "big", photo_url: "https://i.imgur.com/f9Ll0kx.jpg")
bulldog = Dog.new(name: "joemama", breed: "bulldog", size: "medium", photo_url: "https://i.imgur.com/EA3Vf.jpg")
poodle = Dog.new(name: "parkinson", breed: "poodle", size: "medium", photo_url: "https://i.imgur.com/3FX40AW.jpg")

shihtzu.foods = [
    Food.new(brand: "Purina shih tzu", breed: "Shih tzu",size: "small", link_url: "https://www.purina.com/dogs/dog-breeds/shih-tzu"),
    Food.new(brand: "Royale", breed: "Shih tzu",size: "small", link_url: "https://www.purina.com/dogs/dog-breeds/shih-tzu")
]    
husky.foods = [
    Food.new(brand: "Purina husky",breed: "husky",size: "big", link_url: "https://www.chewy.com/blue-buffalo-wilderness-chicken/dp/32050?utm_source=google-product&utm_medium=cpc&utm_campaign=f&utm_content=Blue%20Buffalo&utm_term=&gclid=EAIaIQobChMIp8ef1tKd1gIViCaGCh1O3AZmEAQYASABEgIeFPD_BwE&gclsrc=aw.ds"),
    Food.new(brand: "blue wilderness",breed: "husky",size: "big", link_url: "https://www.chewy.com/blue-buffalo-wilderness-chicken/dp/32050?utm_source=google-product&utm_medium=cpc&utm_campaign=f&utm_content=Blue%20Buffalo&utm_term=&gclid=EAIaIQobChMIp8ef1tKd1gIViCaGCh1O3AZmEAQYASABEgIeFPD_BwE&gclsrc=aw.ds")
]    
australian_shepherd.foods = [
    Food.new(brand: "Purina australian-shepherd",breed: "australian shepherd mix",size: "medium", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817"),
    Food.new(brand: "orijen",breed: "australian shepherd",size: "medium", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817")
]    
labrador.foods = [
    Food.new(brand: "Purina labrador",breed: "labrador",size: "medium", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817"),
    Food.new(brand: "orijen",breed: "labrador",size: "medium", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817")
]
dalmatian.foods = [
    Food.new(brand: "Purina dalmatian",breed: "dalmatian",size: "medium", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817"),
    Food.new(brand: "orijen",breed: "dalmatian",size: "medium", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817")
]
saintbernard.foods = [
    Food.new(brand: "Purina saint bernard",breed: "saint bernard",size: "big", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817"),
    Food.new(brand: "orijen",breed: "saint bernard",size: "big", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817")
]
chihuahua.foods = [
    Food.new(brand: "Purina chihuahua",breed: "chihuahua",size: "small", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817"),
    Food.new(brand: "orijen",breed: "chihuahua",size: "small", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817")
]
spaniel.foods = [
    Food.new(brand: "Purina spaniel",breed: "spaniel",size: "medium", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817"),
    Food.new(brand: "orijen",breed: "spaniel",size: "medium", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817")
]
collie.foods = [
    Food.new(brand: "Purina collie",breed: "collie",size: "big", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817"),
    Food.new(brand: "orijen",breed: "collie",size: "big", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817")
]
akita.foods = [
    Food.new(brand: "Purina akita",breed: "akita",size: "big", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817"),
    Food.new(brand: "orijen",breed: "akita",size: "big", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817")
]
bulldog.foods = [
    Food.new(brand: "Purina bulldog",breed: "bulldog",size: "medium", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817"),
    Food.new(brand: "orijen",breed: "bulldog",size: "medium", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817")
]
poodle.foods = [
    Food.new(brand: "Purina poodle",breed: "poodle",size: "medium", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817"),
    Food.new(brand: "orijen",breed: "poodle",size: "medium", link_url: "https://www.chewy.com/orijen-original-grain-free-dry-dog/dp/128817")
]

shihtzu.save!
husky.save!
australian_shepherd.save!
labrador.save!
dalmatian.save!
saintbernard.save!
chihuahua.save!
spaniel.save!
collie.save!
akita.save!
bulldog.save!
poodle.save!

