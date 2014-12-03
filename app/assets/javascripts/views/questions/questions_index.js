FastFeedback.Views.QuestionsIndex = Backbone.CompositeView.extend({
  className: 'my-questions',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function (question, response, options) {
    var content = this.template({
      user: this.model,
      questions: this.model.questions(),
    });
    this.$el.html(content);
    return this;
  },

  template: JST['questions/index']
});
