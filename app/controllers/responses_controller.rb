class ResponsesController < ApplicationController
  def create
    @response = response.new(response_params)
    @response.answerer_id = session[:answerer_id]
    puts @response
  end

  private
  def response_params
    puts params
    params.require(:response).permit(:answer_id)
  end
end
