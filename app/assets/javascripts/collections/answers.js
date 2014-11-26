FastFeedback.Collections.Answers = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.question = options.question;
  },

  model: FastFeedback.Models.Answer,

  url: '/api/answers'
});
