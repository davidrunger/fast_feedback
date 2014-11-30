FastFeedback.Views.MyPolls = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function (question, response, options) {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  template: JST['user/my_polls']
});
