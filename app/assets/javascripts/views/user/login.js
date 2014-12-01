FastFeedback.Views.Login = Backbone.CompositeView.extend({
  events: {
    'click #submit': 'login'
  },

  render: function (question, response, options) {
    var content = this.template({ user: this.model, action: 'login' });
    this.$el.html(content);
    return this;
  },

  login: function (event) {
    event.preventDefault();
    var userAttrs = this.$el.find('form').serializeJSON();
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: 'json',
      data: userAttrs,
      success: function (data, status) {
        Backbone.history.navigate('#/my_polls');
      },
      error: function (response, status) {
        this.$el.prepend(response.responseText);
      }.bind(this)
    });
  },

  template: JST['user/user_form']
});
