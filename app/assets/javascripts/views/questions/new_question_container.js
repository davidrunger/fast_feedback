FastFeedback.Views.NewQuestionContainer = Backbone.CompositeView.extend({
  activeView: function () {
    if (this.questionState == 'editing') {
      return this.editView;
    } else {
      return this.savedView;
    }
  },

  className: 'new-question-container',

  edit: function (event) {
    event.preventDefault();
    console.log('you are now editing a question');
    console.log(this.model);
  },

  events: {
    'click .save-question': 'save',
    'click .edit-question': 'edit'
  },

  initialize: function (options) {
    this.questionState = options.questionState || 'editing';
    this.editView = new FastFeedback.Views.EditQuestion({ model: this.model });
    this.savedView = new FastFeedback.Views.SavedQuestion({ model: this.model });
  },

  remove: function () {
    this.editView.remove();
    this.savedView.remove();
  },

  render: function () {
    this.$el.html(this.activeView().render().$el);
    this.activeView().delegateEvents();
    return this;
  },

  save: function (event) {
    event.preventDefault();
    console.log('you are now viewing a saved question');
    console.log(this.model);
  }
});
