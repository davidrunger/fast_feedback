class Answer < ActiveRecord::Base
  validates :question_id, :text, :sms_code, :ord, presence: true
end
