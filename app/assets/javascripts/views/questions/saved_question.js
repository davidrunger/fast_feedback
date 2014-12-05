FastFeedback.Views.SavedQuestion = Backbone.CompositeView.extend({
  className: 'saved-question',

  render: function () {
    var content = this.template({ question: this.model });
    this.$el.html(content);
    return this;
  },

  template: JST['questions/saved_question']
});
