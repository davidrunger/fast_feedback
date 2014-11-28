class ResponsesController < ApplicationController
  def create
    response = Response.new(response_params)
    response.answerer_id = 'djr2dd2ac'
    if response.save
      render json: response
    else
      render json: response.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def response_params
    puts 'PARAMS:'
    puts params
    params.require(:response).permit(:answer_id)
  end
end
