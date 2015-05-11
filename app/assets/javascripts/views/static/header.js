FastFeedback.Views.Header = Backbone.CompositeView.extend({
  events: {
    'click .sign-out': 'signOut',
    'click .modal-sign-in': 'signIn',
    'click .demo-account': 'demoAccount'
  },

  demoAccount: function (event) {
    event.preventDefault();
    var $email = this.$('#email');
    var $password = $('#password');
    this.ghostwrite($email, 'demo@user.net');
    var view = this;
    $email.on('ghostwriteFinish', function () {
      view.ghostwrite($password, 'password');
    });
    $password.on('ghostwriteFinish', function () {
      view.$('.modal-sign-in').click();
    });
  },

  ghostwrite: function ($input, text) {
    var interval = 110;
    function timeoutLetters(i) {
      setTimeout(function () {
        $input.val(text.slice(0, i));
        if (i === text.length) {
          $input.trigger('ghostwriteFinish');
        }
      }, interval * i);
    }
    for (var i = 1, len = text.length; i <= len; i++) {
      timeoutLetters(i);
    }
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
        $('.modal-backdrop').remove();
        $('body').css('padding-right', '');
        Backbone.history.navigate('#/account');
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
