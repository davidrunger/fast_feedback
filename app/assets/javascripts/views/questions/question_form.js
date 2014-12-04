FastFeedback.Views.QuestionForm = Backbone.CompositeView.extend({
  addAnswer: function (answer) {
    var answerFormView = new FastFeedback.Views.AnswerForm({ model: answer });
    this.addSubview('.answers', answerFormView);
  },

  addBlankAnswer: function (event) {
    event && event.preventDefault();
    var answer = new FastFeedback.Models.Answer({ ord: this.model.numAnswers() + 1 });
    this.collection.add(answer);
    var answerFormView = new FastFeedback.Views.AnswerForm({ model: answer });
    this.addSubview('.answers', answerFormView);
  },

  className: 'question-form',

  events: {
    'click .publish-question': 'publish',
    'click .add-answer': 'addBlankAnswer'
  },

  initialize: function (options) {
    this.collection = this.model.answers();
    this.isInSurvey = options.isInSurvey;
    this.isInModal = options.isInModal;
    this.listenTo(this.model, 'sync', this.render);
  },

  publish: function (event) {
    event.preventDefault();
    var questionAttrs = this.$el.serializeJSON();
    this.model.save(questionAttrs, {
      success: function () {
        Backbone.history.navigate('#/questions/' + this.model.id) 
      }.bind(this)
    });
  },

  render: function () {
    var content = this.template({
      question: this.model,
      isInSurvey: this.isInSurvey,
      isInModal: this.isInModal
    });
    this.$el.html(content);
    if (this.model.id) {
      this.model.answers().each(function (answer) {
        this.addAnswer(answer);
      }.bind(this));
    } else {
      while (this.model.numAnswers() < 2) {
        this.addBlankAnswer();
      }      
    }
    if (this.model.numAnswers() >= 4) {
      this.$el.find('.add-answer').addClass('disabled');
    }
    this.attachSubviews();
    return this;
  },

  tagName: 'form',

  template: JST['questions/question_form']
});
