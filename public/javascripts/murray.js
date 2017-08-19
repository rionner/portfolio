// MURRAY IMAGE SIZING
$(document).ready(function(){
  var height = $(window).height();
  $('.img-fill').height(height);

  $(window).resize(function() {
    var height = $(window).height();
    $('.img-fill').height(height);
  });
});
