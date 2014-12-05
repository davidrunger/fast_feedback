class RemoveAnswererIdIndexFromResponses < ActiveRecord::Migration
  def change
    remove_index(:responses, column: :answerer_id)
  end
end
