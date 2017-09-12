class Api::DogsController < ApplicationController
    def index
        @dogs = Dog.all
        render json: @dogs
      end


    def create
    @dog = Dog.create!(dog_params)
    redirect_to dog_path(@dog)
  end

  def show
    @dog = Dog.find(params[:id])
    render json: @dog
  end

  def update
    @dog = Dog.find(params[:id])
    @dog.update!(dog_params)
    redirect_to dog_path(@dog)
  end

  def destroy
    @dog = Dog.find(params[:id])
    @dog.destroy
    redirect_to dogs_path
  end

  private

  def dog_params
    params.require(:dog).permit(:name, :breed, :size, :photo_url)
  end
end