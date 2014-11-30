class QuestionsController < ApplicationController
  def vote
    @question = Question.find(params[:id])
    @answers = @question.answers
    render layout: 'voting'
  end
end
