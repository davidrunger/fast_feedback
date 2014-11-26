class AddOrdToAnswers < ActiveRecord::Migration
  def change
    add_column :answers, :ord, :integer, null: false
  end
end
