FastFeedback.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    '/questions/new': 'new'
  },

  new: function () {
    var questionFormView = new FastFeedback.Views.QuestionForm({ model: null });
    this._swapView(questionFormView);
  },

  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove()
    }
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
});
