FastFeedback.Views.QuestionShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.subscribeToChannel();
  },

  isFirstRender: function () {
    var data = this.responseData();
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i];
    }
    if (sum === 0 || sum === 1) {
      return true;
    } else {
      return false;
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
    // chart is not yet on the page and we need to render the full template
    if (this.isFirstRender() || this.$el.html() === '' || (this.$el.find('#results-chart') && this.$el.find('#results-chart').html() === '')) {
      var content = this.template({ question: this.model, answers: this.model.answers() });
      this.$el.html(content);
      this.renderChart();
    }
    // if chart is already on page, just update the chart
    else {
      this.updateChart();
    }
    return this;
  },

  renderChart: function () {
    var answer_choices = this.model.answers().map(function (answer) {
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
          categories: answer_choices,
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

  subscribeToChannel: function () {
    if (Pusher.instances[0].channels.all().length === 1) {
      var oldChannelName = Pusher.instances[0].channels.all()[0].name;
      Pusher.instances[0].unsubscribe(oldChannelName);
      Pusher.instances[0].channels.remove(oldChannelName);
    }
    var channel = FastFeedback.pusher.subscribe('response-updates-' + this.model.id);
    channel.bind('response-event', function(data) {
      this.model.fetch();
    }.bind(this));
  },

  updateChart: function () {
    Highcharts.charts[Highcharts.charts.length-1].series[0].setData(this.responseData(), true, true)
  },

  template: JST['questions/question_show']
});
