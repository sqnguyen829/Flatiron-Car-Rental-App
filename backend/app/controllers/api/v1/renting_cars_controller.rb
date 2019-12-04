class Api::V1::RentingCarsController < ApplicationController

    def index
        rentingCars = RentingCar.all
        render json: rentingCars, except: [:created_at, :updated_at]
    end

    def show
        rentingCar = RentingCar.find_by(id: params[:id])
        if car 
            render json: rentingCar, except: [:created_at, :updated_at]
        else
            render json: {message: 'car not found'}
        end
    end

    def create
        rentingCar = RentingCar.create(rentingCar_params)
        render json: rentingCar, except: [:created_at, :updated_at]
    end

    def destroy
        rentingCar = RentingCar.find(params[:id])
        rentingCar.destroy
    end

    private
    def rentingCar_params
        params.require(:rentingCar).permit(:user_id,:car_id,:start_date,:end_date,:cost)
    end
end
