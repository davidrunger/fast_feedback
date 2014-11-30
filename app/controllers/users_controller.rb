class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to user_url(user)
    else
      flash.now[:errors] ||= []
      flash.now[:errors] << user.errors.full_messages
    end
  end

  def show
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
