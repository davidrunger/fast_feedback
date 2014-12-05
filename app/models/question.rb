# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  survey_id  :integer
#  chart_type :string(255)
#  pic_url    :string(255)
#  title      :text             not null
#  created_at :datetime
#  updated_at :datetime
#

class Question < ActiveRecord::Base
  validates :title, presence: true
  has_many :answers, -> { order(ord: :asc) }, inverse_of: :question, dependent: :destroy
  accepts_nested_attributes_for :answers
  belongs_to :user
  belongs_to :survey
end
