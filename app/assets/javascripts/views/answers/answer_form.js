FastFeedback.Views.AnswerForm = Backbone.View.extend({
  className: 'answer-field clearfix',

  render: function () {
    var content = this.template({ answer: this.model });
    this.$el.html(content);
    return this;
  },

  template: JST['answers/answer_form']
});
