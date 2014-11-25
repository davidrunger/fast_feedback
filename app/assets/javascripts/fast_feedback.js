window.FastFeedback = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    FastFeedback.questions = new FastFeedback.Collections.Questions();
    new FastFeedback.Routers.Router({ $rootEl: $('#main') });
    Backbone.history.start();
  }
}

$(document).ready(function () {
  FastFeedback.initialize()
});
