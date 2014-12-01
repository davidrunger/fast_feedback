class CreateSurveys < ActiveRecord::Migration
  def change
    create_table :surveys do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.integer :default_num_questions, default: 2

      t.timestamps
    end
    add_index :surveys, :user_id
  end
end
