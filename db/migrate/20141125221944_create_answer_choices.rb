class CreateAnswerChoices < ActiveRecord::Migration
  def change
    create_table :answer_choices do |t|
      t.integer :question_id, null: false
      t.text :text, null: false
      t.integer :sms_code, null: false
      t.string :pic_url

      t.timestamps
    end
    add_index :answer_choices, :question_id
    add_index :answer_choices, :sms_code, unique: true
  end
end
