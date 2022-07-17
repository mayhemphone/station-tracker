# frozen_string_literal: true

class Api::V1::AnimalsController < ApplicationController
  before_action :set_animal, only: %i[show edit update destroy]

  def index
    @animals = Animal.all
    render json: @animals
  end

  def show
    if @animal
      render json: @animal
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  def new
    @animal = Animal.new
  end

  def edit; end

  def create
    @animal = Animal.new(animal_params)

    if @animal.save
      render json: @animal
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  def update
    if @animal.update(animal_params)
      render json: @animal
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @animal.destroy
      render json: { notice: 'Animal was successfully removed.' }
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  private

  def set_animal
    @animal = Animal.find(params[:id])
  end

  def animal_params
    params.permit(:name, :motto)
  end
end
