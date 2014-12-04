FastFeedback.Views.SurveyForm = Backbone.CompositeView.extend({
  addBlankQuestion: function (event) {
    event && event.preventDefault();
    var question = new FastFeedback.Models.Question({ ord: ++this.model.num_questions });
    this.collection.add(question);
    var questionFormView = new FastFeedback.Views.QuestionForm({
      model: question,
      isInSurvey: true
    });
    this.addSubview('.questions', questionFormView);
  },

  addQuestion: function (question) {
    this.collection.add(question);
    var questionContainerView = new FastFeedback.Views.QuestionContainer({
      model: question
    });
    this.addSubview('.questions', questionContainerView);
    this.attachSubview('.questions', questionContainerView);
  },

  className: 'survey-form',

  events: {
    'change #survey-title': 'saveTitle',
    'keyup #survey-title': 'saveTitle',
    'click .publish-survey': 'publish',
    'click .add-question': 'addQuestion'
  },

  initialize: function () {
    this.listenToOnce(this.model, 'sync', this.render);
    this.collection = this.model.questions();
  },

  publish: function (event) {
    event.preventDefault();
    this.saveTitle();
    this.savePriorQuestion();
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
    if (this.model.id) {
      if (this.subviews('.questions').length < this.model.numQuestions()) {
        this.model.questions().each(function (question) {
          this.savePriorQuestion();
          this.addQuestion(question);
        }.bind(this));
      }
    } else {
      while (this.model.numQuestions() === 0) {
        this.addBlankQuestion();
      }
    }
    this.attachSubviews();
    return this;
  },

  role: 'form',

  savePriorQuestion: function (event) {
    event && event.preventDefault();
    if (this.model.num_questions > 0) {
      var questionAttrs = this.$el.find('form').last().serializeJSON()
      questionAttrs['question']['survey_id'] = this.model.id;
      var question = new FastFeedback.Models.Question(questionAttrs);
      question.save({}, {
        success: function () {
          event && Backbone.history.navigate("#/surveys/<%= this.model.id %>/edit");
        }.bind(this)
      });
    }
  },

  saveTitle: function (event) {
    event && event.preventDefault();
    var title = this.$el.find('#survey-title').val();
    this.model.save({ title: title });
  },

  template: JST['surveys/survey_form']
});
