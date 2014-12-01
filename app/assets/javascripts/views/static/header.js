FastFeedback.Views.Header = Backbone.CompositeView.extend({
  events: {
    'click .sign-out': 'signOut'
  },

  initialize: function (options) {
    this.current_user = options.current_user;
    this.listenTo(this.current_user, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ current_user: this.current_user });
    this.$el.html(content);
    return this;
  },

  signOut: function (event) {
    event.preventDefault();
    $.ajax({
        url: 'api/current_user',
        type: 'DELETE',
        dataType: 'json',
        success: function(result) {
          debugger
          Backbone.history.navigate('#/');
        }
    });
  },

  template: JST['static/header']
});
