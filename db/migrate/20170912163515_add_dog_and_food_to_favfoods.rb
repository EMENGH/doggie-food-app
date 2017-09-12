class AddDogAndFoodToFavfoods < ActiveRecord::Migration[5.1]
  def change
    remove_column :favfoods, :dog_id
    remove_column :favfoods, :food_id
    add_reference :favfoods, :dog, foreign_key: true
    add_reference :favfoods, :food, foreign_key: true
  end
end
