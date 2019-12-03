class Api::V1::AuthController < ApplicationController
    def create
        #gets the login input for username
        user = User.find_by(username: params[:username])

        #checks if user exist
        if user &&  user.authenticate(params[:password])
                                                        #here we pass user.id as a payload to encode_token 
            render json: {username: user.username, token: encode_token(user.id)}
        else
            render json: {error: "Invalid username or password!"}
        end
    end
end
