class QuestionsController < ApplicationController
  def index
    render json: 'hi'
  end

  def create
    @question = Question.new(question_params)
    @question.save!
  end

  private
  def question_params
    params.require(:question).permit(:body, :chart_type, :pic_url)
  end
end