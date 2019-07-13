class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :address
      t.string :about_me
      t.integer :age
      t.json :skills
      t.json :interests

      t.timestamps
    end
  end
end
