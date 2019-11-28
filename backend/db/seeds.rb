# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Car.destroy_all
RentingCar.destroy_all

u1=User.create(user_name:"Jane123", first_name:"Jane", last_name:"Doe", password:"jane123", point:200, email:"jane123@gmail.com" )
u2=User.create(user_name:"Steven456", first_name:"Steven", last_name:"Nguyen", password:"sn123", point:2500, email:"snguyen@gmail.com" )
u3=User.create(user_name:"Patrick789", first_name:"Patrick", last_name:"Freeney", password:"pf789", point:3000, email:"pfreeney@gmail.com" )

c1=Car.create(make:"Chevrolet", model:"Spark", year:2020, image:"https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2020/cars/spark/mov/01-images/2020-spark-masthead-01.jpg?imwidth=960", mileage:10222, rating: 3.2, price:20, availible:false, user_id:u1.id)
c2=Car.create(make:"Toyota", model:"FJ Cruiser", year:2008, image:"https://cdn-w.v12soft.com/photos/Ea3k72j/12150330/059083_800600.jpg", mileage:80347, rating: 3.7, price:30,availible:true, user_id:u2.id)
c3=Car.create(make:"Toyota", model:"FJ Cruiser", year:2012, image:"https://www.vividracing.com/images/T0654FJ-SS-1.jpghttps://www.vividracing.com/images/T0654FJ-SS-1.jpg", mileage:20483, rating: 4.7, price:40, availible:false, user_id:u2.id)
c4=Car.create(make:"Mercedes-Benz", model:"S 450 Sedan", year:2020, image:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/s/sedan/byo-options/2020-S-SEDAN-MP-011.jpg", mileage:600, rating: 4.9, price:80, availible:false, user_id:u3.id)
c5=Car.create(make:"Speed", model:"YBY 120", year:2018, image:"https://ae01.alicdn.com/kf/HTB1b9skJVXXXXXQXXXXq6xXFXXXu/220086755/HTB1b9skJVXXXXXQXXXXq6xXFXXXu.jpg?size=149988&height=800&width=800&hash=eb27fdc36c0c0718306d21ae529bb5a5", mileage:254, rating: 1, price:5, availible:false, user_id:u3.id)

r1=RentingCar.create(user_id:u1.id, car_id:c5.id, start_date:11102019, end_date:11122019, cost:10)
r2=RentingCar.create(user_id:u1.id, car_id:c3.id, start_date:11082019, end_date:11122019, cost:120)
r3=RentingCar.create(user_id:u2.id, car_id:c4.id, start_date:11102019, end_date:11152019, cost:400)
r4=RentingCar.create(user_id:u3.id, car_id:c1.id, start_date:11062019, end_date:11082019, cost:40)