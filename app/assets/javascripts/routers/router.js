FastFeedback.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    'questions/new': 'new',
    'questions/:id': 'show',
    'my_polls': 'myPolls'
  },

  myPolls: function () {
    var user = new FastFeedback.Models.User();
    user.fetch();
    var myPollsView = new FastFeedback.Views.MyPolls({ model: user });
    this._swapView(myPollsView);
  },

  new: function () {
    var newQuestion = new FastFeedback.Models.Question();
    var questionFormView = new FastFeedback.Views.QuestionForm({ model: newQuestion });
    this._swapView(questionFormView);
  },

  show: function (id) {
    var question = FastFeedback.questions.getOrFetch(id);
    var questionShowView = new FastFeedback.Views.QuestionShow({ model: question });
    this._swapView(questionShowView);
  },

  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove()
    }
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
});
