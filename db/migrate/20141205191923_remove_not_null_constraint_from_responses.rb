class RemoveNotNullConstraintFromResponses < ActiveRecord::Migration
  def change
    change_column :responses, :answerer_id, :string, :null => true
  end
end
