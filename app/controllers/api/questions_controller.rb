class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
    render json: @questions
  end

  def create
    @question = Question.new(question_params)
    @question.save!
    render json: @question
  end

  private
  def question_params
    params.require(:question).permit(:body, :chart_type, :pic_url)
  end
end