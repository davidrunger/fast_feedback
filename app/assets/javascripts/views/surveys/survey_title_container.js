FastFeedback.Views.SurveyTitleContainer = Backbone.CompositeView.extend({
  className: 'survey-title-container',

  editSurveyTitle: function (event) {
    event.preventDefault();
    var surveyTitleFormView = new FastFeedback.Views.SurveyTitleForm({ model: this.model });
    // this._survey_title_subview.remove();
    this._surveyTitleSubview = surveyTitleFormView;
    this.$el.html(surveyTitleFormView.render().$el);
  },

  events: {
    'click .edit-survey-title': 'editSurveyTitle',
    'click .save-survey-title': 'saveSurveyTitle'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    if (this.model.id && this.model.title) {
      var surveyTitleShowView = new FastFeedback.Views.SurveyTitleShow({ model: this.model });
      this._surveyTitleSubview = surveyTitleShowView;
    } else {
      var surveyTitleFormView = new FastFeedback.Views.SurveyTitleForm({ model: this.model });
      this._surveyTitleSubview = surveyTitleFormView;
    }
  },

  onRender: function () {
    this.delegateEvents();
    this.onRender();
  },

  render: function () {
    this.$el.html(this._surveyTitleSubview.render().$el);
    Object.getPrototypeOf(this).onRender.call(this);
    return this;
  },

  saveSurveyTitle: function (event) {
    event.preventDefault();
    var surveyTitle = this.$el.find('input').val();
    this.model.save({ title: surveyTitle });
    var surveyTitleShowView = new FastFeedback.Views.SurveyTitleShow({ model: this.model });
    // this._surveyTitleSubview.remove();
    this._surveyTitleSubview = surveyTitleShowView;
    this.$el.html(surveyTitleShowView.render().$el);  
  },


  template: JST['questions/survey_title_show']
});
