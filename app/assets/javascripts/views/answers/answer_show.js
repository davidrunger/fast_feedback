FastFeedback.Views.AnswerShow = Backbone.View.extend({
  render: function () {
    var content = this.template({ answer: this.model });
    this.$el.html(content);
    return this;
  },

  template: JST['answers/answer_show']
});
