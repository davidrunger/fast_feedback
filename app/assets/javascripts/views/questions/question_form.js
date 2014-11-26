FastFeedback.Views.QuestionForm = Backbone.CompositeView.extend({
  addAnswer: function (event) {
    event && event.preventDefault();
    debugger
    var answer = new FastFeedback.Models.Answer({ ord: ++this.model.num_answers });
    var answerFormView = new FastFeedback.Views.AnswerForm({ model: answer });
    this.addSubview('.answers', answerFormView);
    this.attachSubviews();
  },

  events: {
    'click .publish-question': 'publish',
    'click .add-answer': 'addAnswer'
  },

  initialize: function () {
  },

  publish: function (event) {
    event.preventDefault();
    var questionAttrs = this.$el.serializeJSON();
    debugger
    this.model.save(questionAttrs, {
      success: function () {
        Backbone.history.navigate('#/questions/' + this.model.id) 
      }.bind(this)
    });
  },

  render: function () {
    while (this.model.num_answers < 2) {
      this.addAnswer();
    }
    var content = this.template({ question: this.model });
    this.$el.html(content);
    return this;
  },

  tagName: 'form',

  template: JST['questions/question_form']
});
