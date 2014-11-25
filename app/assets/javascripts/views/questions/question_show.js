FastFeedback.Views.QuestionShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    debugger
    var content = this.template({ question: this.model });
    this.$el.html(content);
    return this;
  },

  template: JST['questions/question_show']
});
