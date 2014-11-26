class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer :answer_choice_id, null: false
      t.string :answerer_id, null:false

      t.timestamps
    end
    add_index :responses, :answer_choice_id
    add_index :responses, :answerer_id
  end
end
