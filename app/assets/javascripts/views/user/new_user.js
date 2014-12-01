FastFeedback.Views.NewUser = Backbone.CompositeView.extend({
  events: {
    'click #sign-up': 'signUp'
  },

  render: function (question, response, options) {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  signUp: function (event) {
    event.preventDefault();
    var userAttrs = this.$el.find('form').serializeJSON();
    this.model.save(userAttrs, {
      success: function () {
        Backbone.history.navigate('#/my_polls') 
      }.bind(this)
    });
  },

  template: JST['user/new']
});
