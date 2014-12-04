FastFeedback.Views.QuestionsIndex = Backbone.CompositeView.extend({
  activateTooltips: function () {
    $(".edit").tooltip({placement : 'top'});
    $(".delete").tooltip({placement : 'top'});
  },

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
    this.activateTooltips();
    return this;
  },

  template: JST['questions/index']
});
