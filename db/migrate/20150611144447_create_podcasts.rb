class CreatePodcasts < ActiveRecord::Migration
  def change
    create_table :podcasts do |t|
      t.string :title
      t.string :data_content
      t.string :image

      t.timestamps null: false
    end
  end
end
