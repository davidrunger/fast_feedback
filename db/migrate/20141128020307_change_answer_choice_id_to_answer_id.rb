class ChangeAnswerChoiceIdToAnswerId < ActiveRecord::Migration
  def change
    rename_column :responses, :answer_choice_id, :answer_id
  end
end
