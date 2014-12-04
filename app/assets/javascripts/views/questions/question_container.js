FastFeedback.Views.QuestionContainer = Backbone.CompositeView.extend({
  className: 'question-container',

  editQuestion: function (event) {
    event.preventDefault();
    var questionFormView = new FastFeedback.Views.QuestionForm({ model: this.model, isInSurvey: true });
    this._question_subview.remove();
    this._question_subview = questionFormView;
    this.$el.html(questionFormView.render().$el);
  },

  events: {
    'click .edit-question': 'editQuestion',
    'click .save-question': 'saveQuestion'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    var questionSimpleShowView = new FastFeedback.Views.QuestionSimpleShow({ model: this.model });
    this._question_subview = questionSimpleShowView;
  },

  render: function () {
    this.$el.html(this._question_subview.render().$el);
    return this;
  },

  saveQuestion: function (event) {
    event.preventDefault();
    var questionAttrs = this.$el.find('form').serializeJSON()
    this.model.save(questionAttrs);
    var questionSimpleShowView = new FastFeedback.Views.QuestionSimpleShow({ model: this.model, isInSurvey: true });
    this._question_subview.remove();
    this._question_subview = questionSimpleShowView;
    this.$el.html(questionSimpleShowView.render().$el);  
  },


  template: JST['questions/question_simple_show']
});
