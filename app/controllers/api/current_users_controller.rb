class Api::CurrentUsersController < ApplicationController
  def logout
    logout!
    render json: {'status' => 'successfully logged out'}, status: :ok
  end

  def show
    logged_in? ? (render 'current_user') : (render json: nil)
  end
end