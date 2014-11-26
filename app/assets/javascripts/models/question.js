FastFeedback.Models.Question = Backbone.Model.extend({
  initialize: function () {
    this.num_answers = 0;
  },

  urlRoot: '/api/questions'
});
