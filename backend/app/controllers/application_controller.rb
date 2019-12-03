class ApplicationController < ActionController::Base
    
    skip_before_action :verify_authenticity_token
    #before any action run the method check_authentication
    before_action :check_authentication
    #this creates a token
    def encode_token(payload)# for token generation
        JWT.encode(payload, "RentalSecretKey", "HS256") #algo is optioinal as a default HS256
    end

    def auth_header
        # { 'Authorization': 'Bearer <token>' }
        request.headers['Authorization']
        # byebug
    end
    
    #if decoded_token is true decode the token using the user_id and find that user
    def current_user
        # byebug
        if decoded_token
        # byebug
          user_id = decoded_token["user_id"]
  
          User.find(user_id)
        end
    end
    
    def decoded_token
         # token => "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
        if auth_header
          token = auth_header.split(' ')[1]
            puts token
            # byebug
          begin
            # byebug
           JWT.decode(token,"RentalSecretKey")[0] #pass the same key
            # JWT.decode => [{ "user_id"=>"18" }, { "alg"=>"HS256" }]
            # [0] gives us the payload { "user_id"=>"18" }
          rescue JWT::DecodeError
            nil
          end
        end
    end
    
    #this is the first function that runs because of before action
    def check_authentication
        render json: { error: 'Please log in' }, status: 401 if !logged_in?
    end
    
    #if logged_in is true call a another method current_user
    def logged_in?
        #the !! is just finding a vaule true or false
        !!current_user
    end
end
