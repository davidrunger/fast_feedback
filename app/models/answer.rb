# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  text        :text             not null
#  pic_url     :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  ord         :integer          not null
#

class Answer < ActiveRecord::Base
  validates :question, :text, :ord, presence: true
  belongs_to :question
  has_many :responses

  def response_count
    responses.count
  end
end
