class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :ord, :text, :responseCount

  def responseCount
    object.responses.size
  end
end
