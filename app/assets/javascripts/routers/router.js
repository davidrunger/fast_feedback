FastFeedback.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'landingPage',
    'users/new': 'newUser',
    'questions/new': 'newQuestion',
    'questions/:id': 'showQuestion',
    'surveys/new': 'newSurvey',
    'surveys/:id/browse': 'browseSurvey',
    'surveys/:id': 'showSurvey',
    'my_questions': 'myQuestions',
    'my_surveys': 'mySurveys',
    'login': 'login'
  },

  browseSurvey: function (id) {
    var survey = new FastFeedback.Models.Survey({ id: id });
    survey.fetch();
    var surveyBrowseView = new FastFeedback.Views.SurveyBrowse({ model: survey });
    this._swapView(surveyBrowseView);
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

  myAccount: function () {
    var current_user = new FastFeedback.Models.CurrentUser();
    current_user.fetch();
    var myAccountView = new FastFeedback.Views.MyAccount({ model: current_user });
    this._swapView(myAccountView);
  },

  myQuestions: function () {
    var current_user = new FastFeedback.Models.CurrentUser();
    current_user.fetch();
    var myQuestionsView = new FastFeedback.Views.MyQuestions({ model: current_user });
    this._swapView(myQuestionsView);
  },

  mySurveys: function () {
    var current_user = new FastFeedback.Models.CurrentUser();
    current_user.fetch();
    var mySurveysView = new FastFeedback.Views.MySurveys({ model: current_user });
    this._swapView(mySurveysView);
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

  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove()
    }
    this._currentView = view;
    this.$rootEl.html(this.header().render().$el);
    this.$rootEl.append(this._currentView.render().$el);
  }
});
