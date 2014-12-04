FastFeedback.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'landingPage',
    'users/new': 'newUser',
    'questions/new': 'newQuestion',
    'questions/:id/edit': 'editQuestion',
    'questions/:id': 'showQuestion',
    'surveys/new': 'newSurvey',
    'surveys/:id/browse': 'browseSurvey',
    'surveys/:id': 'showSurvey',
    'account': 'account',
    'questions': 'questionsIndex',
    'surveys': 'surveys',
    'login': 'login'
  },

  account: function () {
    var current_user = new FastFeedback.Models.CurrentUser();
    current_user.fetch();
    var myAccountView = new FastFeedback.Views.MyAccount({ model: current_user });
    this._swapView(myAccountView);
  },

  browseSurvey: function (id) {
    var survey = new FastFeedback.Models.Survey({ id: id });
    survey.fetch();
    var surveyBrowseView = new FastFeedback.Views.SurveyBrowse({ model: survey });
    this._swapView(surveyBrowseView);
  },

  editQuestion: function (id) {
    var question = FastFeedback.questions.getOrFetch(id);
    var questionFormView = new FastFeedback.Views.QuestionForm({ model: question });
    this._swapView(questionFormView);
  },

  header: function () {
    var current_user = new FastFeedback.Models.CurrentUser();
    current_user.fetch();
    var headerView = new FastFeedback.Views.Header({ current_user: current_user });
    return headerView;
  },

  landingPage: function () {
    var landingPageView = new FastFeedback.Views.LandingPage();
    this._swapView(landingPageView);
  },

  login: function () {
    var user = new FastFeedback.Models.User();
    var loginView = new FastFeedback.Views.Login({ model: user });
    this._swapView(loginView);
  },

  newQuestion: function () {
    var newQuestion = new FastFeedback.Models.Question();
    var questionFormView = new FastFeedback.Views.QuestionForm({ model: newQuestion });
    this._swapView(questionFormView);
  },

  newSurvey: function () {
    var newSurvey = new FastFeedback.Models.Survey();
    var surveyFormView = new FastFeedback.Views.SurveyForm({ model: newSurvey });
    this._swapView(surveyFormView);
  },

  newUser: function () {
    var newUser = new FastFeedback.Models.User();
    var newUserView = new FastFeedback.Views.NewUser({ model: newUser });
    this._swapView(newUserView);
  },

  questionsIndex: function () {
    var current_user = new FastFeedback.Models.CurrentUser();
    current_user.fetch();
    var questionsIndexView = new FastFeedback.Views.QuestionsIndex({ model: current_user });
    this._swapView(questionsIndexView);
  },

  showQuestion: function (id) {
    var question = FastFeedback.questions.getOrFetch(id);
    var questionShowView = new FastFeedback.Views.QuestionShow({ model: question });
    this._swapView(questionShowView);
  },

  showSurvey: function (id) {
    var survey = new FastFeedback.Models.Survey({ id: id });
    survey.fetch();
    var surveyShowView = new FastFeedback.Views.SurveyShow({ model: survey });
    this._swapView(surveyShowView);
  },

  surveys: function () {
    var current_user = new FastFeedback.Models.CurrentUser();
    current_user.fetch();
    var surveysIndexView = new FastFeedback.Views.SurveysIndex({ model: current_user });
    this._swapView(surveysIndexView);
  },

  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove()
    }
    this._currentView = view;
    this.$rootEl.html(this.header().render().$el);
    this.$rootEl.append(this._currentView.render().$el);
  }
});
