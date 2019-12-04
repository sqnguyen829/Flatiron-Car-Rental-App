class Api::V1::RentingCarsController < ApplicationController
    def create
        rentingCar = RentingCar.create(rentingCar_params)
        render json: rentingCar, except: [:created_at, :updated_at]
    end

    def destroy
        rentingCar = RentingCar.find(params[:id])
        rentingCar.destroy
    end

    private
    def car_params
        params.require(:rentingCar).permit(:user_id,:car_id,:start_date,:end_date,:cost)
    end
end
