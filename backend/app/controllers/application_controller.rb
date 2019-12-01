class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    def encode_token(payload)# for token generation
        JWT.encode(payload, "RentalSecretKey", "HS256") #algo is optioinal as a default HS256
    end

end
