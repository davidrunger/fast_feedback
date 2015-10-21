class Api::WebResponsesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def create
    response = Response.new(response_params)
    response.answerer_id = 'djr2dd2ac'
    if response.save
      Pusher.trigger("response-updates-#{response.answer.question.id}", 'response-event', {:message => 'hello world'})
      render json: response
    else
      render json: response.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def response_params
    params.require(:response).permit(:answer_id)
  end
end
