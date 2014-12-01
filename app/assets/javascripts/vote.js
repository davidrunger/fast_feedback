$(document).ready(function () {
  $('.response-button').on('click', function (event) {
    $.ajax({
      type: "POST",
      url: "http://" + window.location.host + "/api/web_responses",
      dataType: 'json',
      data: { "response": { 'answer_id': $(event.currentTarget).data('answer-id') } }
    });
  });
});