class UsersController < ApplicationController
  before_filter :require_logged_in!, only: [:account, :my_polls]

  def new
    render :new
  end

  def create
    user = User.new(user_params)
    if user.save
      login!(user)
      redirect_to '#/my_polls'
    else
      flash.now[:errors] ||= []
      flash.now[:errors] << user.errors.full_messages
    end
  end

  def my_polls
    @user = current_user
    render :my_polls
  end

  def account
    @user = current_user
    render :account
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
