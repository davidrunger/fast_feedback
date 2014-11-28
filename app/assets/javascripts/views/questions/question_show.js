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
    var categories = this.model.answers().map(function (answer) {
      return answer.get('text');
    });
    var data = this.model.answers().map(function (answer) {
      return answer.get('responseCount');
    });
    var series = {
      name: 'Responses',
      data: data
    };
    $('#results-chart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [series]
    });
  },

  template: JST['questions/question_show']
});
