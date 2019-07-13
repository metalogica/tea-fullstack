# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Message.destroy_all
Photo.destroy_all
User.create!(first_name: "Bob", last_name: "Bobby", email: "bob@email.com", address: "400 sherbrooke", about_me: "Hi, I'm Bob yall", age: 22, skills: {ruby: "Ruby"}, interests: {java: "Java"} )
User.create!(first_name: "Martin", last_name: "Giannakopoulos", email: "martin@email.com", address: "5333 casgrain", about_me: "Hi, I'm a God yall", age: 25, skills: {java: "Java"}, interests: {ruby: "Ruby"} )