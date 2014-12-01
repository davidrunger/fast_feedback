FastFeedback.Views.SurveyForm = Backbone.CompositeView.extend({
  addQuestion: function (event) {
    event && event.preventDefault();
    var question = new FastFeedback.Models.Question({ ord: ++this.model.num_questions });
    this.collection.add(question);
    var questionFormView = new FastFeedback.Views.QuestionForm({ model: question, isInSurvey: true });
    this.addSubview('.questions', questionFormView);
  },

  className: 'survey-form',

  events: {
    'click .publish-survey': 'publish',
    'click .add-question': 'addQuestion'
  },

  initialize: function () {
    this.collection = this.model.questions();
  },

  publish: function (event) {
    event.preventDefault();
    var surveyAttrs = this.$el.serializeJSON();
    this.model.save(surveyAttrs, {
      success: function () {
        Backbone.history.navigate('#/surveys/' + this.model.id)
      }.bind(this)
    });
  },

  render: function () {
    var content = this.template({ survey: this.model });
    this.$el.html(content);
    while (this.model.num_questions < 1) {
      this.addQuestion();
    }
    this.attachSubviews();
    return this;
  },

  role: 'form',

  tagName: 'form',

  template: JST['surveys/survey_form']
});