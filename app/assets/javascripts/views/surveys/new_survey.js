FastFeedback.Views.NewSurvey = Backbone.CompositeView.extend({
  className: 'new-survey',

  editSurveyTitle: function (event) {
    event.preventDefault();
    this.$el.find('.survey-title-container').html(JST['surveys/survey_title_form']({ survey: this.model }));
    this.delegateEvents();
  },

  events: {
    'click #save-survey-title': 'saveSurveyTitle',
    'click .edit-survey-title': 'editSurveyTitle'
  },

  initialize: function () {
    this.numQuestions = 0;
    this.listenToOnce(this.model, 'sync', this.renderFirstQuestionContainer);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.$el.find('.survey-title-container').html(JST['surveys/survey_title_form']({ survey: this.model }));
    return this;
  },

  renderFirstQuestionContainer: function () {
    var question = new FastFeedback.Models.Question({
      ord: ++this.numQuestions,
      surveyId: this.model.id
    });
    var newQuestionContainerView = new FastFeedback.Views.NewQuestionContainer({ model: question });
    this.addSubview('.questions', newQuestionContainerView);
    this.attachSubview('.questions', newQuestionContainerView.render())
  },

  saveSurveyTitle: function (event) {
    event.preventDefault();
    var title = $(event.delegateTarget).find('#survey-title').val();
    this.model.save({ title: title }, {
      success: function () {
        this.$el.find('.survey-title-container').html(JST['surveys/survey_title_show']({ survey: this.model }));
        this.delegateEvents();
      }.bind(this)
    });
  },

  template: JST['surveys/new_survey']
});
