FastFeedback.Models.Survey = Backbone.Model.extend({
  questions: function () {
    this._questions = this._questions || new FastFeedback.Collections.Questions([], {
      question: this
    });
    return this._questions;
  },

  parse: function (response) {
    if (response.questions) {
      this.questions().set(response.questions, { parse: true });
      delete response.questions;
    }
    
    return response;
  },

  urlRoot: '/api/surveys'
});
