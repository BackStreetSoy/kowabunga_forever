class CreateStatContents < ActiveRecord::Migration
  def change
    create_table :stat_contents do |t|
      t.string :content_text

      t.timestamps null: false
    end
  end
end
