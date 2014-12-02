json.extract!(@survey, :id, :title)
json.questions @survey.questions, partial: 'api/questions/question_show', as: :question