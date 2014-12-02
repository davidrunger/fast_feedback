FastFeedback.Views.SurveyShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function (question, response, options) {
    var content = this.template({
      survey: this.model,
      questions: this.model.questions()
    });
    this.$el.html(content);
    return this;
  },

  template: JST['surveys/survey_show']
});
