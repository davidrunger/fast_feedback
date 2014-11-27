class ResponsesController < ApplicationController
  def create
    @response = response.new(response_params)
    @response.answerer_id = session[:answerer_id]
  end
end
