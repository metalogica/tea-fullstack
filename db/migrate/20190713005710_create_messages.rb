class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.boolean :unread
      t.string :content
      #t.references :user, foreign_key: true
      t.integer :recipient_id
      t.integer :sender_id
      t.timestamps
    end
  end
end
