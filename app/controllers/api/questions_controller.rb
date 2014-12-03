class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.where("survey_id IS NULL")
    render json: @questions
  end

  def create
    @question = Question.new(question_params)
    if logged_in?
      @question.user_id = current_user.id
    end
    @question.save!
    render json: @question
  end

  def show
    @question = Question.find(params[:id])
    render :question_show
  end

  private
  def question_params
    params.require(:question).permit(
      :id, :title, :chart_type, :pic_url, :survey_id, :ord,
      answers_attributes: [:id, :text, :ord, :_destroy]
    )
  end
end