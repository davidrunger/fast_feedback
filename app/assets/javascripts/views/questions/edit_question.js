FastFeedback.Views.EditQuestion = Backbone.CompositeView.extend({
  className: 'edit-question',

  render: function () {
    var content = this.template({ question: this.model });
    this.$el.html(content);
    return this;
  },

  tagName: 'form',

  template: JST['questions/edit_question']
});
