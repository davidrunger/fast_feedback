class Api::AnswersController < ApplicationController
  def index
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.save!
    render json: @answer
  end

  def show
  end

  private
  def answer_params
    params.require(:answer).permit(:text, :sms_code, :question_id)
  end
end