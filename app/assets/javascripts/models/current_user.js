FastFeedback.Models.CurrentUser = Backbone.Model.extend({
  parse: function (response) {
    if (response.questions) {
      this.questions().set(response.questions, { parse: true });
      delete response.questions;
    }
    
    return response;
  },

  questions: function () {
    this._questions = this._questions || new FastFeedback.Collections.Questions([], {
      user: this
    });
    return this._questions;
  },

  url: '/api/current_user'
});
