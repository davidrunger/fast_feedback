class Api::CurrentUsersController < ApplicationController
  def show
    render 'current_user'
  end
end