FastFeedback.Views.QuestionShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ question: this.model, answers: this.model.answers() });
    this.$el.html(content);
    return this;
  },

  template: JST['questions/question_show']
});
