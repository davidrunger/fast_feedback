json.extract!(@question, :id, :title)
json.answers @question.answers, partial: 'api/answers/answer_show', as: :answer