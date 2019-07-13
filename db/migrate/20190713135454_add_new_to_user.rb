class AddNewToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :new, :boolean, default: true
  end
end
