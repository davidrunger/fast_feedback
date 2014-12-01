class AddOrdToQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :ord, :integer
  end
end
