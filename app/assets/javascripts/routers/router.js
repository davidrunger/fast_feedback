FastFeedback.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    '': 'landingPage',
    'questions/new': 'newQuestion',
    'questions/:id': 'show',
    'my_polls': 'myPolls',
    'users/new': 'newUser'
  },

  landingPage: function () {
    var landingPageView = new FastFeedback.Views.LandingPage();
    this._swapView(landingPageView)
  },

  myPolls: function () {
    var current_user = new FastFeedback.Models.CurrentUser();
    current_user.fetch();
    var myPollsView = new FastFeedback.Views.MyPolls({ model: current_user });
    this._swapView(myPollsView);
  },

  newQuestion: function () {
    var newQuestion = new FastFeedback.Models.Question();
    var questionFormView = new FastFeedback.Views.QuestionForm({ model: newQuestion });
    this._swapView(questionFormView);
  },

  newUser: function () {
    var newUser = new FastFeedback.Models.User();
    var newUserView = new FastFeedback.Views.NewUser({ model: newUser });
    this._swapView(newUserView);
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
