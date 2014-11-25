class Api::AnswerChoicesController < ApplicationController
  def index
  end

  def create
    @answer_choice = AnswerChoice.new(answer_choice_params)
    @answer_choice.question_id = params[:question_id]
    @answer_choice.save!
    render json: @answer_choice
  end

  def show
  end

  private
  def answer_choice_params
    params.require(:answer_choice).permit(:text, :sms_code)
  end
end