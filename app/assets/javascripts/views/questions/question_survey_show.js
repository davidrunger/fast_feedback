FastFeedback.Views.QuestionSurveyShow = Backbone.CompositeView.extend({
  render: function () {
    var content = this.template({ question: this.model, answers: this.model.answers() });
    this.$el.html(content);
    return this;
  },

  template: JST['questions/question_survey_show']
});
