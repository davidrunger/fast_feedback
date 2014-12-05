class Survey < ActiveRecord::Base
  validates :title, presence: true
  has_many :questions, -> { order(ord: :asc) }, inverse_of: :survey, dependent: :destroy
  belongs_to :user
  accepts_nested_attributes_for :questions
end
