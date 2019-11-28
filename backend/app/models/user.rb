class User < ApplicationRecord
    has_many :cars
    has_many :renting_cars
end
