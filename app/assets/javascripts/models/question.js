FastFeedback.Models.Question = Backbone.Model.extend({
  answers: function () {
    this._answers = this._answers || new FastFeedback.Collections.Answers([], {
      question: this
    });
    return this._answers;
  },

  numAnswers: function () {
    return this.answers().length;
  },

  parse: function (response) {
    if (response.answers) {
      this.answers().set(response.answers, { parse: true });
      delete response.answers;
    }
    
    return response;
  },

  urlRoot: '/api/questions'
});
