window.FastFeedback = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    if (Pusher && Pusher.instances.length === 0) {
      FastFeedback.pusher = new Pusher('64152daaea1aca17f899');
    }
    FastFeedback.questions = new FastFeedback.Collections.Questions();
    new FastFeedback.Routers.Router({ $rootEl: $('#main') });
    Backbone.history.start();
  }
}

$(document).ready(function () {
  FastFeedback.initialize();
  $('#slideshow').cycle({
    fx: 'fade',
    pager: '#smallnav', 
    pause:   10, 
    speed: 1000,
    timeout:  5000 
  }); 
});
