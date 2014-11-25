FastFeedback.Views.QuestionForm = Backbone.View.extend({
  render: function () {
    var content = this.template({ question: this.model });
    this.$el.html(content);
    return this;
  },

  template: JST['questions/question_form']
});
