class Api::V1::UsersController < ApplicationController

    skip_before_action :check_authentication, only: [:create]

    def index
        users = User.all
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

    #sign up
    def create
        user = User.new(user_params)
        # byebug
        if user.valid?
            user.save
            #this next line is sending back the user we just created, the "user:" is the key, which
            #is the value UserSerializer.new(user). Were we are passing user to the UserSerializer
            #The serializer will then hand the info back to us depend on what we wanted in the attribute 
            #of the user_serializer.rb
            render json: {user: UserSerializer.new(user)}, status: :created
        else
            render json: {error: 'Failed to create user.'}, status: :not_acceptable
        end
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, except: [:created_at, :updated_at]
    end

    private
    def user_params
        params.require(:user).permit(:username,:firstname,:lastname,:password,:point,:email)
    end
end