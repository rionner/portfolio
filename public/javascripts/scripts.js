  // PORTFOLIO NAVIGATION SHOW/HIDE
$(document).ready(function(){
  $('.expand-nav').on('click', function(){
    $('.port-nav-list').toggleClass('is-hidden');
    $('.expand-nav > figure').toggleClass('is-hidden');
  });
});
