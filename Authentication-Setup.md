Serializer is a more orginize way to send back data instead of json.Do you have to use serializer? 
No, you don't. There is a rails command for serializer.

In the backend create the serializers folder with user_serializer.rb this should be in the app folder.
 -set attributes inside the user_serializer.rb that will be used except password.

Set up the Singup component method handleNewUser to create a new user.

The method handleNewUser will make a post fetch request to the backend user controller create method.
    -we could byebug to see the params being passed to the create method through rails c
    -so for the strong params we could do 
        def user_params
            params.require(:user).permit(:username,:firstname,:lastname,:password,:point,:email)
        end
    -But we would need "user" in the body see arrow =========>
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
========>    "user": {
              username: e.target[0].value,
              firstname: e.target[1].value,
              lastname: e.target[2].value,
              password: e.target[3].value,
              point: e.target[4].value,
              email: e.target[5].value
            }
          })

    -Or we remove the requre(:user) from the strong params

        def user_params
            params.permit(:username,:firstname,:lastname,:password,:point,:email)
        end

    -And our fetch would look like this siince it won't look for user
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: e.target[0].value,
              firstname: e.target[1].value,
              lastname: e.target[2].value,
              password: e.target[3].value,
              point: e.target[4].value,
              email: e.target[5].value
            }
          })
    
Now create our create method in user controller
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

Now we need auth_controller.rb to be created, we could also create a method inside user controller
    class Api::V1::AuthController < ApplicationController
        def create
            #gets the login input for username
            user = User.find_by(username: params[:username])

            #checks if user exist
            if user &&  user.authenticate(params[:password])
                render json: {username: user.username, token: encode_token(user.id)}
            else
                render json: {error: "Invalid username or password!"}
            end
        end
    end

Now we create 2 methods for the frontend Login.js componeent called handleChange and login
    -after this is set up make sure the gem "jwt","~> 2.1"  is in the gemfile.
    -this gem is need to create the token

Now in ApplicatioinController we will make an encode_token method to create a token
    def encode_token(payload)# for token generation
        JWT.encode(payload, "RentalSecretKey", "HS256") #algo is optioinal as a default HS256
    end

Now the rest of the methods are addeed to app controller
      
      def auth_header
        # { 'Authorization': 'Bearer <token>' }
        request.headers['Authorization']
      end
    
      def current_user
        if decoded_token
          user_id = decoded_token["user_id"]
  
          User.find(user_id)
        end
      end
    
      def decoded_token
         # token => "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
        if auth_header
          token = auth_header.split(' ')[1]
            puts token
          begin
           JWT.decode(token,"flatiron")[0] #pass the same key
            # JWT.decode => [{ "user_id"=>"18" }, { "alg"=>"HS256" }]
            # [0] gives us the payload { "user_id"=>"18" }
          rescue JWT::DecodeError
            nil
          end
        end
      end
    
      def check_authentication
        render json: { error: 'Please log in' }, status: 401 if !logged_in?
      end
    
      def logged_in?
        !!current_user
      end

Now we need to ass a skip before action to skip if the user hasn't logged in yet. So in 
auth_controller.rb and users_controller.rb place this code.
    
    skip_before_action :verify_authenticity_token

Now we make a fetch request with a second argument which is now the token it would look something like this.
    getCars = () => {

    fetch("http://localhost:3000/api/v1/cars", {
      method: "GET",
      headers:{
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(console.log)
    }






