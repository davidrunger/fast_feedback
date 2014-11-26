class Question < ActiveRecord::Base
  validates :title, presence: true
  has_many :answers
  accepts_nested_attributes_for :answers #
end