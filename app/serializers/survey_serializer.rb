class SurveySerializer < ActiveModel::Serializer
  # json.extract!(@survey, :id, :title)
  # json.questions @survey.questions, partial: 'api/questions/question_show', as: :question
  attributes :id, :title
  # has_many :posts, include: { author: [:bio], comments: [:author]] }
  has_many :questions
end
