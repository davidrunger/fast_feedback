class DropAnswerChoices < ActiveRecord::Migration
  def up
    drop_table :answer_choices
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
