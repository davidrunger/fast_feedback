class AnswerChoice < ActiveRecord::Base
  validates :question_id, :text, :sms_code, presence: true
end
