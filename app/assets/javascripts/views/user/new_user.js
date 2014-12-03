FastFeedback.Views.NewUser = Backbone.CompositeView.extend({
  events: {
    'click #submit': 'signUp'
  },

  render: function (question, response, options) {
    var content = this.template({ user: this.model, action: 'signup' });
    this.$el.html(content);
    return this;
  },

  signUp: function (event) {
    event.preventDefault();
    var userAttrs = this.$el.find('form').serializeJSON();
    this.model.save(userAttrs, {
      success: function () {
        Backbone.history.navigate('#/my_account') 
      }.bind(this)
    });
  },

  template: JST['user/user_form']
});
