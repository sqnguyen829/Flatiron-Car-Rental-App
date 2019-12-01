class Api::V1::AuthController < ApplicationController
    def create
        user = User.find_by(user_name: params[:username])

        if user &&  user.authenticate(params[:passwrod])
            render json: {username: user.username, token: encode_token(user.id)}
        else
            render json: {error: "Invalid username or password!"}
        end
    end
end
