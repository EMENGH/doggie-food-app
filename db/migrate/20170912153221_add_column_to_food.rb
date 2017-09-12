class AddColumnToFood < ActiveRecord::Migration[5.1]
  def change
    add_column :foods, :link_url, :string
  end
end
