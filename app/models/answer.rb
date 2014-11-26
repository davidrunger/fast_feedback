class Answer < ActiveRecord::Base
  validates :question, :text, :sms_code, :ord, presence: true
  belongs_to :question
end
