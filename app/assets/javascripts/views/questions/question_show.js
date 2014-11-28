FastFeedback.Views.QuestionShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function (question, response, options) {
    var content = this.template({ question: this.model, answers: this.model.answers() });
    this.$el.html(content);
    this.model.answers().each(function (answer) {
      var answerShowView = new FastFeedback.Views.AnswerShow({ model: answer });
      var answerResponses = new FastFeedback.Views.AnswerResponses({ model: answer });
      this.addSubview('.answers', answerShowView.render());
      this.addSubview('.responses', answerResponses.render());
    }.bind(this))
    this.attachSubviews();
    this.renderChart();
    return this;
  },

  renderChart: function () {
    $('#results-chart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
  },

  template: JST['questions/question_show']
});
