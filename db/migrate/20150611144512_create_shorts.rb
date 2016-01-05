class CreateShorts < ActiveRecord::Migration
  def change
    create_table :shorts do |t|
      t.string :title
      t.string :data_content

      t.timestamps null: false
    end
  end
end
