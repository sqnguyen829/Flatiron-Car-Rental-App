class UserSerializer < ActiveModel::UserSerializer
    attributes :username, :firstname, :lastname, :point, :email
end