FastFeedback.Views.SurveyTitleShow = Backbone.CompositeView.extend({
  className: 'survey-title-show',

  render: function () {
    var content = this.template({ survey: this.model });
    this.$el.html(content);
    Object.getPrototypeOf(this).onRender.call(this);
    return this;
  },

  template: JST['surveys/survey_title_show']
});
