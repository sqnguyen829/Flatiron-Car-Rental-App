class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        # render json: users, except: [:created_at, :updated_at], includes: :cars, except: [:created_at, :updated_at], include: :renting_cars, except: [:created_at, :updated_at]
        render json: users.as_json(except: [:created_at, :updated_at], :include => {:cars=>{except: [:created_at, :updated_at]}, :renting_cars =>{except: [:created_at, :updated_at]}})
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            # render json: user, except: [:created_at, :updated_at], include: :cars, except: [:created_at, :updated_at],include: :renting_cars, except: [:created_at, :updated_at]
            render json: user.as_json(except: [:created_at, :updated_at], :include => {:cars=>{except: [:created_at, :updated_at]}, :renting_cars =>{except: [:created_at, :updated_at]}})
        else 
            render json: {message: 'User not found'}
        end
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, except: [:created_at, :updated_at]
    end

    private
    def user_params
        params.require(:user).permit(:user_name,:first_name,:last_name,:password,:point,:email)
    end
end