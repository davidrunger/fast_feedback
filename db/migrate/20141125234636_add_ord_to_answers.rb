class AddOrdToAnswers < ActiveRecord::Migration
  def change
    add_column :answers, :ord, :integer
  end
end
