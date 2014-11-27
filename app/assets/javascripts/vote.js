$(document).ready(function () {
  console.log('here!');
  $('button').on('click', function (event) {
    console.log(event.currentTarget.data('answer-id'));
    $.ajax({
      type: "POST",
      url: "/responses",
      data: { "response": { "answer_id": $(event.target).data('answer_id') } }
    });
  });
});