FastFeedback.Views.QuestionShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.initializePusher();
  },

  initializePusher: function () {
    if (Pusher.instances.length === 0) {
      var pusher = new Pusher('64152daaea1aca17f899');
      var channel = pusher.subscribe('response-updates');
      channel.bind('response-event', function(data) {
        this.model.fetch();
      }.bind(this));
    }
  },

  removeCharts: function () {
    Highcharts.charts.forEach(function (chart) {
      if (typeof chart !== 'undefined') {
        chart.destroy();
      }
    });
  },

  render: function (question, response, options) {
    // if chart is already on page, just update the chart
    if (this.$el.html() !== '' && this.$el.find('#results-chart').html() !== '') {
      this.updateChart();
    }
    // chart is not yet on the page and we need to render the full template
    else {
      var content = this.template({ question: this.model, answers: this.model.answers() });
      this.$el.html(content);
      this.renderChart();
    }
    return this;
  },

  renderChart: function () {
    var categories = this.model.answers().map(function (answer) {
      return "<span class='answer-text'>" + answer.get("text") + "<br/>"
        + "<span class='sms-code'>(" + answer.id + ")</span></span>";
    });
    var data = this.responseData();
    var responseCounts = {
      name: 'Responses',
      data: data
    };
    $('#results-chart').highcharts({
        chart: {
          animation: false,
          marginLeft: 300,
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
              'font-size': '26px'
            },
            useHTML: true
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
            text: ''
          }
        },
        series: [responseCounts]
    });
  },

  responseData: function () {
    return this.model.answers().map(function (answer) {
      return answer.get('responseCount');
    });
  },

  updateChart: function () {
    Highcharts.charts[Highcharts.charts.length-1].series[0].setData(this.responseData(), true, true)
  },

  template: JST['questions/question_show']
});
