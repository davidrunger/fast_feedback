class Api::CurrentUsersController < ApplicationController
  def show
    logged_in? ? (render 'current_user') : (render json: nil)
  end
end