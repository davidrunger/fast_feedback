window.FastFeedback = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    new FastFeedback.Routers.Router({ $rootEl: $('#main') });
    Backbone.history.start();
  }
}

$(document).ready(function () {
  FastFeedback.initialize()
});
