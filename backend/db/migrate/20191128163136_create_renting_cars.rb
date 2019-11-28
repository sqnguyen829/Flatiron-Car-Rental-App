class CreateRentingCars < ActiveRecord::Migration[6.0]
  def change
    create_table :renting_cars do |t|
      t.integer :user_id
      t.integer :car_id
      t.integer :start_date
      t.integer :end_date
      t.integer :cost

      t.timestamps
    end
  end
end
