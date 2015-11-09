$(document).ready(function(){

  // INDEX
  var height = $(window).height();
  $('.quote').height(height); // INDEX QUOTE
  $('.fill').height(height); // MURRAY IMAGE SIZING
  $('.photo-box').height(height); // PHOTOGRAPHY IMAGE SIZING

  $(window).resize(function() {
    var height = $(window).height();
    $('.quote').height(height); // INDEX QUOTE
    $('.fill').height(height); // MURRAY IMAGE SIZING
    $('.photo-box').height(height); // PHOTOGRAPHY IMAGE SIZING
  });

  $('.sartre').hide();
  $('.sinatra').hide();
  $('.socrates').delay(1000).fadeOut(1000);
  $('.sartre').delay(2000).fadeIn(1500).fadeOut(1000);
  $('.sinatra').delay(4500).fadeIn(1500);

  // INDEX
  // PORTFOLIO SCRIPTS
  $('.text').hide();

  $('.portie-item').mouseover(function() {
    if ($('.triangle-topright').length <= 0) $(this).prepend('<div class="triangle-topright"></div>');
   });

  $('.portie-item').mouseleave(function() {
    $('.triangle-topright').remove();
  });

  $(".aplo-quote").mouseover(function(){
    $(".aplo-quote-info").fadeIn(300, 'linear');
  });

  $(".original-six").mouseover(function(){
    $(".original-six-info").fadeIn(300, 'linear');
  });

  $(".marvel").mouseover(function(){
    $(".marvel-info").fadeIn(300, 'linear');
  });

  $(".restaurant").mouseover(function(){
    $(".restaurant-info").fadeIn(300, 'linear');
  });

  $(".murray").mouseover(function(){
    $(".murray-info").fadeIn(300, 'linear');
  });

  $(".shake-it").mouseover(function(){
    $(".shake-it-info").fadeIn(300, 'linear');
  });

  $(".photography").mouseover(function(){
    $(".photography-info").fadeIn(300, 'linear');
  });

  $(".kismet").mouseover(function(){
    $(".kismet-info").fadeIn(300, 'linear');
  });

  $(".this").mouseover(function(){
    $(".this-info").fadeIn(300, 'linear');
  });

  // SHAKE-IT-SPEARE SCRIPTS
  $("#loaded").hide();
  $("#rewrite").on("click", function(){
    $("#loaded").show();
    $("#loading").hide();
    $.ajax({
      method: "get",
      url: "http://shakeitspeare.com/api/sentence",
      success: function(data){
        $(".sentence").text(data.sentence);
      }
    })
  });

})
