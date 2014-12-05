FastFeedback.Views.NewQuestionContainer = Backbone.CompositeView.extend({
  activeView: function () {
    if (this._questionState == 'editing') {
      return this.editView;
    } else {
      return this.savedView;
    }
  },

  className: 'new-question-container',

  edit: function (event) {
    event.preventDefault();
    this._questionState = 'editing';
    this.render();
  },

  events: {
    'click .save-question': 'save',
    'click .edit-question-button': 'edit'
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this._questionState = options.questionState || 'editing';
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

  save: function (callback) {
    var questionAttrs = this.$el.find('form').serializeJSON();
    this.model.save(questionAttrs, {
      success: function () {
        callback();
      }
    });
  }
});
