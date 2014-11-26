class Response < ActiveRecord::Base
  validates :answer, :answerer_id, presence: true
end
