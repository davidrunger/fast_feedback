FastFeedback.Views.LandingPage = Backbone.CompositeView.extend({
  render: function () {
    var content = this.template({ current_user: FastFeedback.current_user });
    this.$el.html(content);
    return this;
  },

  template: JST['static/landing_page']
});
