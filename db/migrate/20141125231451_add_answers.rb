class AddAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :question_id, null: false
      t.text :text, null: false
      t.integer :sms_code, null: false
      t.string :pic_url

      t.timestamps
    end
    add_index :answers, :question_id
    add_index :answers, :sms_code, unique: true
  end
end
