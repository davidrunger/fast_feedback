json.extract!(answer, :id, :text, :sms_code, :ord);
json.set! :responseCount, answer.response_count