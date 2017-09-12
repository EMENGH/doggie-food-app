class Food < ApplicationRecord
    has_many :favfoods
    has_many :dogs, through: :favfoods
end
