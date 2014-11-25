class ChangeQuestionColumnBodyToTitle < ActiveRecord::Migration
  def change
    rename_column :questions, :body, :title
  end
end