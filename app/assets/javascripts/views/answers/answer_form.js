FastFeedback.Views.AnswerForm = Backbone.View.extend({
  render: function () {
    var content = this.template({ answer: this.model });
    this.$el.html(content);
    return this;
  },

  tagName: 'form',

  template: JST['answers/answer_form']
});
