FastFeedback.Views.QuestionShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function (question, response, options) {
    var content = this.template({ question: this.model, answers: this.model.answers() });
    this.$el.html(content);
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
        legend: {
          enabled: false
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: categories,
            labels: {
              style: {
                'font-size': '20px'
              }
            }
        },
        yAxis: {
            labels: {
              style: {
                'font-size': '20px'
              }
            },
            minTickInterval: 1,
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [series]
    });
  },

  template: JST['questions/question_show']
});
