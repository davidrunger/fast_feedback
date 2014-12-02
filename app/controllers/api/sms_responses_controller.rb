class Api::SmsResponsesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def create
    response = Response.new(
      answer_id: params[:text],
      answerer_id: params[:msisdn]
    )
    if response.save
      Pusher.app_id = ENV['PUSHER_APP_ID']
      Pusher.key = ENV['PUSHER_KEY']
      Pusher.secret = ENV['PUSHER_SECRET']
      Pusher.trigger("response-updates-#{response.answer.question.id}", "response-event", {:message => 'hello world'})
    end
    render json: nil, status: :ok
  end

  private
  def response_params
    params.permit(:msisdn, :text)
  end
end