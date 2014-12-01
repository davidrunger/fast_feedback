FastFeedback.Views.QuestionForm = Backbone.CompositeView.extend({
  addAnswer: function (event) {
    event && event.preventDefault();
    var answer = new FastFeedback.Models.Answer({ ord: ++this.model.num_answers });
    this.collection.add(answer);
    var answerFormView = new FastFeedback.Views.AnswerForm({ model: answer });
    this.addSubview('.answers', answerFormView);
  },

  className: 'question-form',

  events: {
    'click .publish-question': 'publish',
    'click .add-answer': 'addAnswer'
  },

  initialize: function (options) {
    this.collection = this.model.answers();
    this.isInSurvey = options.isInSurvey;
    if (options.divContainer) {
      this.setElement(options.divContainer);
    }
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
    var content = this.template({ question: this.model, isInSurvey: this.isInSurvey });
    this.$el.html(content);
    while (this.model.num_answers < 2) {
      this.addAnswer();
    }
    this.attachSubviews();
    return this;
  },

  tagName: 'form',

  template: JST['questions/question_form']
});
