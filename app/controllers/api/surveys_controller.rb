class Api::SurveysController < ApplicationController
  def index
    if logged_in?
      render json: current_user.surveys, status: :ok
    else
      render json: {}, status: :unauthorized
    end
  end
end
