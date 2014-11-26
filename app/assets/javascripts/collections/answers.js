FastFeedback.Collections.Answers = Backbone.Collection.extend({
  comparator: function (answer) {
    return answer.get('ord');
  },

  initialize: function (models, options) {
    this.question = options.question;
  },

  model: FastFeedback.Models.Answer,

  url: '/api/answers'
});
