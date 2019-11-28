class Car < ApplicationRecord
    belongs_to :user
    has_many :renting_cars
end
