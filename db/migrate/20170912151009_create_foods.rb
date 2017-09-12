class CreateFoods < ActiveRecord::Migration[5.1]
  def change
    create_table :foods do |t|
      t.string :brand
      t.string :breed
      t.string :size

      t.timestamps
    end
  end
end
