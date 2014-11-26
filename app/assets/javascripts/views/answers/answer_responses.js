FastFeedback.Views.AnswerResponses = Backbone.View.extend({
  render: function () {
    var content = this.template({ answer: this.model });
    this.$el.html(content);
    return this;
  },

  tagName: 'tr',

  template: JST['answers/answer_responses']
});
