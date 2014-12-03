json.extract!(current_user, :id, :email)
json.questions current_user.questions.where('survey_id IS NULL'), partial: 'api/questions/question_item_show', as: :question_item
json.surveys current_user.surveys, partial: 'api/surveys/survey_item_show', as: :survey_item