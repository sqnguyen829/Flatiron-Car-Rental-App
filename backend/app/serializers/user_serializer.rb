class UserSerializer < ActiveModel::Serializer
    attributes :username, :firstname, :lastname, :point, :email
end