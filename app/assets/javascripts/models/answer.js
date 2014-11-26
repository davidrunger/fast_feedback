FastFeedback.Models.Answer = Backbone.Model.extend({
  initialize: function () {
    this.set('sms_code', Math.floor(Math.random() * 10000));
  },

  urlRoot: '/api/answers'
});
