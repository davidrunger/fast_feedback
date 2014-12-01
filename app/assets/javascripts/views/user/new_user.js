FastFeedback.Views.NewUser = Backbone.CompositeView.extend({
  render: function (question, response, options) {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  template: JST['user/new']
});
