class Api::SurveysController < ApplicationController
  def index
    if logged_in?
      render json: current_user.surveys, status: :ok
    else
      render json: {}, status: :unauthorized
    end
  end

  def create
    @survey = Survey.new(survey_params)
    if logged_in?
      @survey.user_id = current_user.id
    end
    @survey.save!
    render json: @survey
  end

  private
  def survey_params
    params.require(:survey).permit(
      :id, :title, :default_num_questions,
      questions_attributes: [:id, :title, :ord, :answers_attributes, :_destroy]
    )
  end
end
