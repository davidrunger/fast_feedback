class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :ord
  has_many :answers
end
