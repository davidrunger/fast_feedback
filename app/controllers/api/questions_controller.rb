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

  def show
    @question = Question.find(params[:id])
    render json: @question
  end

  private
  def question_params
    params.require(:question).permit(:title, :chart_type, :pic_url)
  end
end