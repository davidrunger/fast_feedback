FastFeedback.Views.AnswerChoiceForm = Backbone.View.extend({
  render: function () {
    var content = this.template({ answer_choice: this.model });
    this.$el.html(content);
    return this;
  },

  template: JST['answer_choices/answer_choice_form']
});
