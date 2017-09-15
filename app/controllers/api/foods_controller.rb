class Api::FoodsController < ApplicationController
    # before_action :authenticate_user!
        
    def index
        @dog = Dog.find(params[:dog_id])
        @foods = @dog.foods
        render json: @foods
    end
      
    def show
        @dog = Dog.find(params[:dog_id])
        @food = @dog.foods.find params[:id]
      
        render json: @food
    end
end
