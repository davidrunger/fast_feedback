FastFeedback.Models.Question = Backbone.Model.extend({
  answers: function () {
    this._answers = this._answers || new FastFeedback.Collections.Answers([], {
      question: this
    });
    return this._answers;
  },

  initialize: function () {
    this.num_answers = 0;
  },

  urlRoot: '/api/questions'
});
