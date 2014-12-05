FastFeedback.Views.SurveyTitleForm = Backbone.CompositeView.extend({
  className: 'survey-title-form',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ survey: this.model });
    this.$el.html(content);
    Object.getPrototypeOf(this).onRender.call(this);
    return this;
  },

  template: JST['surveys/survey_title_form']
});
