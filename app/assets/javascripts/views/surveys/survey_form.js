FastFeedback.Views.SurveyForm = Backbone.CompositeView.extend({
  addQuestion: function (event) {
    event && event.preventDefault();
    if (this.model.num_questions !== 0) {
      this.savePriorQuestion();
    }
    var question = new FastFeedback.Models.Question({ ord: ++this.model.num_questions });
    this.collection.add(question);
    var questionFormView = new FastFeedback.Views.QuestionForm({
      model: question,
      isInSurvey: true
    });
    this.addSubview('.questions', questionFormView);
  },

  className: 'survey-form',

  events: {
    'blur #survey-title': 'saveTitle',
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

  savePriorQuestion: function () {
    var questionAttrs = this.$el.find('form').last().serializeJSON()
    questionAttrs['question']['survey_id'] = this.model.id;
    var question = new FastFeedback.Models.Question(questionAttrs);
    question.save({}, {
      success: function () {
      }.bind(this)
    });
  },

  saveTitle: function (event) {
    event.preventDefault();
    var title = event.target.value
    this.model.save({ title: title })
  },

  template: JST['surveys/survey_form']
});
