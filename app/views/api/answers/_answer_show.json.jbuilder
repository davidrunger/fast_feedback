json.extract!(answer, :id, :text, :ord);
json.set! :responseCount, answer.response_count