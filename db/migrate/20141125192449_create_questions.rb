class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :user_id
      t.integer :survey_id
      t.string :chart_type
      t.string :pic_url
      t.text :body, null: false

      t.timestamps
    end
    add_index :questions, :user_id
    add_index :questions, :survey_id
  end
end
