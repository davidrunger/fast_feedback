class SessionsController < ApplicationController
  def destroy
    logout!
    redirect_to new_session_url
  end
end
