FastFeedback.Views.SurveyBrowse = Backbone.CompositeView.extend({
  events: {
    'click .next': 'nextQuestion',
    'click .prev': 'prevQuestion'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this._current_index = 0;
  },

  nextQuestion: function (event) {
    event.preventDefault();
    this._current_index++;
    this.render();
  },

  prevQuestion: function (event) {
    event.preventDefault();
    this._current_index--;
    this.render();
  },

  render: function () {
    this._num_questions = this.model.questions().length;
    if (this._question_subview) {
      this._question_subview.remove();
    }
    var content = this.template({
      survey: this.model,
      ord: this._current_index + 1,
      num_questions: this._num_questions
    });
    this.$el.html(content);
    var question = this.model.questions().models[this._current_index];
    if (question) {
      question.fetch();
      this._question_subview = new FastFeedback.Views.QuestionShow({ model: question });
      this.$el.find('.question').html(this._question_subview.render().$el);
    }
    return this;
  },

  template: JST['surveys/survey_browse']
});
