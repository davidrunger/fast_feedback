FastFeedback.Views.MyQuestions = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function (question, response, options) {
    $('body').removeClass('modal-open'); // remove class left over from modal login
    var content = this.template({
      user: this.model,
      questions: this.model.questions(),
      surveys: this.model.surveys()
    });
    this.$el.html(content);
    return this;
  },

  template: JST['user/my_polls']
});
