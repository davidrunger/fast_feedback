$(document).ready(function () {
  FastFeedback.initialize();
  $('#slideshow').cycle({
    fx: 'fade',
    pager: '#smallnav',
    pause:   10,
    speed: 1000,
    timeout:  5000
  });
});
