class Api::V1::CarsController < ApplicationController

    def index
        cars = Car.all
        render json: cars, except: [:created_at, :updated_at]
    end

    def show
        car = Car.find_by(id: params[:id])
        if car 
            render json: car, except: [:created_at, :updated_at]
        else
            render json: {message: 'car not found'}
        end
    end

    def create
        car = Car.create(car_params)
        render json: car, except: [:created_at, :updated_at]
    end

    def update
        car = Car.find(params[:id])
        car.update(car_params)
        render json: car, except: [:created_at, :updated_at]
    end

    def destroy
        car = Car.find(params[:id])
        car.destroy
    end

    private
    def car_params
        params.require(:car).permit(:make,:model,:year,:image,:mileage,:rating,:price,:availible,:user_id)
    end

end
