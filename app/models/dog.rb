class Dog < ApplicationRecord
    has_many :favfoods
    has_many :foods, through: :favfoods
end
