FastFeedback.Models.CurrentUser = Backbone.Model.extend({
  parse: function (response) {
    if (response.questions) {
      this.questions().set(response.questions, { parse: true });
      delete response.questions;
    }
    
    return response;
  },

  url: '/api/current_user'
});
