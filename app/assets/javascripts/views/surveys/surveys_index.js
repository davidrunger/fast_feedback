FastFeedback.Views.SurveysIndex = Backbone.CompositeView.extend({
  activateTooltips: function () {
    $(".edit").tooltip({placement : 'top'});
    $(".delete").tooltip({placement : 'top'});
  },

  className: 'my-surveys',

  destroy: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).data('id');
    this.model.surveys().get(id).destroy();
    this.render();
  },

  events: {
    'click .delete': 'destroy'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function (question, response, options) {
    var content = this.template({
      user: this.model,
      surveys: this.model.surveys()
    });
    this.$el.html(content);
    this.activateTooltips();
    return this;
  },

  template: JST['surveys/index']
});
