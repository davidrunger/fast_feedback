FastFeedback.Views.Header = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.current_user = options.current_user;
    this.listenTo(this.current_user, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ current_user: this.current_user });
    this.$el.html(content);
    return this;
  },

  template: JST['static/header']
});
