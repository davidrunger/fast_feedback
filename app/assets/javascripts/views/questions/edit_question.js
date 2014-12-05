FastFeedback.Views.EditQuestion = Backbone.CompositeView.extend({
  addNewAnswer: function (event) {
    event.preventDefault();
    console.log('write addNewAnswer');
  },

  className: 'edit-question',

  ensureTwoQuestions: function () {
    while (this.model.numAnswers() < 2) {
      var answer = new FastFeedback.Models.Answer({ ord: this.model.numAnswers() + 1 });
      this.model.answers().add(answer);
      var answerFormView = new FastFeedback.Views.AnswerForm({ model: answer });
      this.addSubview('.answers', answerFormView);
    }
  },

  events: {
    'click .add-answer': 'addNewAnswer',
  },

  initialize: function () {
    this.ensureTwoQuestions();
  },

  render: function () {
    var content = this.template({ question: this.model, isInSurvey: true });
    this.$el.html(content);
    if (this.model.numAnswers() >= 4) {
      this.$el.find('.add-answer').addClass('disabled');
    }
    this.attachSubviews();
    return this;
  },

  tagName: 'form',

  template: JST['questions/edit_question']
});
