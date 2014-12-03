FastFeedback.Views.Header = Backbone.CompositeView.extend({
  demoAccount: function (event) {
    event.preventDefault();
    $('#email').val('demo@user.net');
    $('#password').val('password');
  },

  events: {
    'click .sign-out': 'signOut',
    'click .modal-sign-in': 'signIn',
    'click .demo-account': 'demoAccount'
  },

  initialize: function (options) {
    this.current_user = options.current_user;
    this.listenTo(this.current_user, 'sync', this.render);
  },

  logIn: function () {
    Backbone.history.navigate('#/login');
  },

  render: function () {
    var content = this.template({ current_user: this.current_user });
    this.$el.html(content);
    return this;
  },

  signIn: function (event) {
    event.preventDefault();
    var userAttrs = this.$el.find('form').serializeJSON();
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: 'json',
      data: userAttrs,
      success: function (data, status) {
        Backbone.history.navigate('#/my_account');
      },
      error: function (response, status) {
        this.$el.prepend(response.responseText);
      }.bind(this)
    });
  },

  signOut: function (event) {
    event.preventDefault();
    $.ajax({
        url: 'api/session',
        type: 'DELETE',
        dataType: 'json',
        success: function(result) {
          Backbone.history.navigate('#/');
        }
    });
  },

  template: JST['static/header']
});
