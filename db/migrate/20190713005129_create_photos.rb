class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.references :user, foreign_key: true
      t.string :url, default: "https://cdn1.medicalnewstoday.com/content/images/articles/324/324771/close-up-of-a-cup-of-tea.jpg"
      t.string :filename, default: "unnamed"

      t.timestamps
    end
  end
end
