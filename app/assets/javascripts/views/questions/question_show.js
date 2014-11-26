FastFeedback.Views.QuestionShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function (question, response, options) {
    var content = this.template({ question: this.model, answers: this.model.answers() });
    this.$el.html(content);
    this.model.answers().each(function (answer) {
      var answerShowView = new FastFeedback.Views.AnswerShow({ model: answer });
      var answerResponses = new FastFeedback.Views.AnswerResponses({ model: answer });
      this.addSubview('.answers', answerShowView.render());
      this.addSubview('.responses', answerResponses.render());
    }.bind(this))
    this.attachSubviews();
    return this;
  },

  template: JST['questions/question_show']
});
