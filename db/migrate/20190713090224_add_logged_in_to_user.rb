class AddMatchedToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :matched, :boolean, default: false
  end
end
