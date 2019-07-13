# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "clearing database"
User.destroy_all
Message.destroy_all
Photo.destroy_all
puts "creating users"
User.create!(first_name: "Dan", last_name: "Old Man", email: "dan.oldman@gmail.com", address: "5333 casgrain", about_me: "I enjoy being a stock person", age: 99, skills: [{ icon: "&#937", name: "Greek"},{ icon: "&#936", name: "Other"}], interests: [{ icon: "&#937", name: "Greek"},{ icon: "&#936", name: "Other"}], matched: false, images: ["https://previews.123rf.com/images/marcoprati/marcoprati1312/marcoprati131200009/24450677-portrait-of-an-old-man-with-gray-eyes.jpg"])
User.create!(first_name: "Bob", last_name: "Bobby", email: "bob@email.com", address: "400 sherbrooke", about_me: "Hi, I'm Bob yall", age: 22, skills: [{ icon: "&#937", name: "Greek"},{ icon: "&#936", name: "Other"}], interests: [{ icon: "&#937", name: "Greek"},{ icon: "&#936", name: "Other"}], matched: false, images: ["https://live.staticflickr.com/72/200858281_1fbb466110_b.jpg"])
User.create!(first_name: "Martin", last_name: "Giannakopoulos", email: "martin@email.com", address: "5333 casgrain", about_me: "Hi, I'm a God yall", age: 25, skills: [{ icon: "&#937", name: "Greek"},{ icon: "&#936", name: "Other"}], interests: [{ icon: "&#937", name: "Greek"},{ icon: "&#936", name: "Other"}], matched: false, images: ["https://vignette.wikia.nocookie.net/nintendo/images/b/b0/Sleep_Kirby.png/revision/latest?cb=20180131012524&path-prefix=en"])
User.create!(first_name: "current_user", last_name: "demo", new: false)
puts "creating messages"

Message.create!(recipient_id: User.last.id, sender_id: User.first.id, content: "this is a test message")
Message.create!(recipient_id: User.last.id, sender_id: User.first.id, content: "this is a test message")
Message.create!(recipient_id: User.last.id, sender_id: User.second.id, content: "this is a test message")
Message.create!(recipient_id: User.last.id, sender_id: User.third.id, content: "this is a test message")
puts "Seed complete"
