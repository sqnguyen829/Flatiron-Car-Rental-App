class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.string :image
      t.integer :mileage
      t.integer :rating
      t.integer :price
      t.boolean :availible
      t.integer :user_id

      t.timestamps
    end
  end
end
