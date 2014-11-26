class QuestionsController < ApplicationController
  def vote
    @question = Question.find(params[:id])
    @answers = @question.answers
  end
end
