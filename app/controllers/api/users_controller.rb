class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.save!
    login!(@user)
    render json: @user
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end