class CreateFavfoods < ActiveRecord::Migration[5.1]
  def change
    create_table :favfoods do |t|
      t.string :dog_id
      t.string :food_id

      t.timestamps
    end
  end
end
