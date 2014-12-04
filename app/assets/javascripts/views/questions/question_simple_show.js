FastFeedback.Views.QuestionSimpleShow = Backbone.CompositeView.extend({
  className: 'question-survey-show',

  render: function () {
    var content = this.template({ question: this.model, answers: this.model.answers() });
    this.$el.html(content);
    return this;
  },

  template: JST['questions/question_simple_show']
});
