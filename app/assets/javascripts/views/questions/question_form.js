FastFeedback.Views.QuestionForm = Backbone.View.extend({
  events: {
    'click .publish-question': 'publish',
    'click .add-answer-choice': 'addAnswer'
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
    var content = this.template({ question: this.model });
    this.$el.html(content);
    return this;
  },

  tagName: 'form',

  template: JST['questions/question_form']
});
