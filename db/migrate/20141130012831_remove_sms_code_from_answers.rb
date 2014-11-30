class RemoveSmsCodeFromAnswers < ActiveRecord::Migration
  def change
    remove_column :answers, :sms_code
  end
end
