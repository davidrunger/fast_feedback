FastFeedback.Views.LandingPage = Backbone.CompositeView.extend({
  initialize: function () {
  },

  render: function (question, response, options) {
    var content = this.template({ current_user: FastFeedback.current_user });
    this.$el.html(content);
    return this;
  },

  template: JST['static/landing_page']
});
