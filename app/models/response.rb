# == Schema Information
#
# Table name: responses
#
#  id          :integer          not null, primary key
#  answer_id   :integer          not null
#  answerer_id :string(255)      not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Response < ActiveRecord::Base
  validates :answer_id, :answerer_id, presence: true
end
