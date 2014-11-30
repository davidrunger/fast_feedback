json.extract!(current_user, :id, :email)
json.questions current_user.questions, partial: 'api/questions/question_item_show', as: :question_item