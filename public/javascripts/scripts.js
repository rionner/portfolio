// document.addEventListener("DOMContentLoaded", function(event) {
//   var h = document.documentElement.clientHeight;

//   // INDEX
//   // var quote = document.getElementsByClassName('quote');
// // console.log(quote);
//   function setHeight(h) {
//     String(h);
//     document.getElementsByClassName('quote').style.height = h + 'px';

//   }

//   setHeight(h);
//   // document.getElementsByClassName('quote').style.height = document.documentElement.clientHeight;
// });


$(document).ready(function(){
  // INDEX
  var height = $(window).height();
  $('.img-fill').height(height); // MURRAY IMAGE SIZING
  $('.photo-box').height(height); // PHOTOGRAPHY IMAGE SIZING

  $(window).resize(function() {
    var height = $(window).height();
    $('.img-fill').height(height); // MURRAY IMAGE SIZING
    $('.photo-box').height(height); // PHOTOGRAPHY IMAGE SIZING
  });

  // PORTFOLIO NAVIGATION SHOW/HIDE
  $('.expand-nav').on('click', function(){
    $('.port-nav-list').toggleClass('is-hidden');
    $('.expand-nav > figure').toggleClass('is-hidden');
  });

  // SHAKE-IT-SPEARE
  $("#loaded").hide();
  $("#rewrite").on("click", function(){
    $("#loaded").hide();
    $("#loading").show();
    $.ajax({
      method: "get",
      url: "http://shakeitspeare.com/api/sentence",
      success: function(data){
        $(".sentence").text(data.sentence);
        $("#loaded").show();
        $("#loading").hide();
      }
    })
  });
});


