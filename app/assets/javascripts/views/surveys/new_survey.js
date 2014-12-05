FastFeedback.Views.NewSurvey = Backbone.CompositeView.extend({
  className: 'new-survey',

  events: {
    'click #save-survey-title': 'saveTitle'
  },

  initialize: function () {
    this.numQuestions = 0;
    this.listenToOnce(this.model, 'sync', this.renderFirstQuestionContainer);
  },

  saveTitle: function (event) {
    event.preventDefault();
    var title = $(event.delegateTarget).find('#survey-title').val();
    this.model.save({ title: title });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
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

  template: JST['surveys/new_survey']
});
