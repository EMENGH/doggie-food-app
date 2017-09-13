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

shihtzu.save!
husky.save!
australian_shepherd.save!