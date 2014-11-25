FastFeedback.Collections.Questions = Backbone.Collection.extend({
  getOrFetch: function (id) {
    var question = FastFeedback.questions.get(id);
    if (!question) {
      question = new FastFeedback.Models.Question({ id: id });
      question.fetch();
    }
    return question;
  },

  model: FastFeedback.Models.Question,

  url: '/api/questions'
});
