FastFeedback.Views.NewSurvey = Backbone.CompositeView.extend({
  addNewQuestionContainer: function (event) {
    event && event.preventDefault();
    var question = new FastFeedback.Models.Question({
      ord: ++this.numQuestions,
      surveyId: this.model.id
    });
    var newQuestionContainerView = new FastFeedback.Views.NewQuestionContainer({ model: question });
    this.addSubview('.questions', newQuestionContainerView);
    this.attachSubview('.questions', newQuestionContainerView.render());
    this.delegateEvents();
  },

  className: 'new-survey',

  editSurveyTitle: function (event) {
    event.preventDefault();
    this.$el.find('.survey-title-container').html(JST['surveys/survey_title_form']({ survey: this.model }));
    this.delegateEvents();
  },

  events: {
    'click .save-survey-title': 'saveSurveyTitle',
    'click .edit-survey-title': 'editSurveyTitle',
    'click .add-question-container': 'addNewQuestionContainer',
    'click .publish-survey': 'publishSurvey'
  },

  initialize: function () {
    this.numQuestions = 0;
    this.listenToOnce(this.model, 'sync', this.renderFirstQuestionContainer);
  },

  publishSurvey: function (event) {
    event.preventDefault();
    this._questionsSaved = 0;
    var numQuestions = this._subviews['.questions'].length;
    var successHandler = function () {
      this._questionsSaved++;
      if (this._questionsSaved === numQuestions) {
        Backbone.history.navigate('#/surveys/' + this.model.id);
      }
    }.bind(this);
    this._subviews['.questions'].forEach(function (questionContainer) {
      questionContainer.save(successHandler);
    });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.$el.find('.survey-title-container').html(JST['surveys/survey_title_form']({ survey: this.model }));
    return this;
  },

  renderFirstQuestionContainer: function () {
    this.addNewQuestionContainer();
    this.$el.append(JST['surveys/survey_controls']());
    this.delegateEvents();
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
