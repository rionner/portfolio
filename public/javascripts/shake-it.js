// SHAKE-IT-SPEARE
$(document).ready(function(){
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
    });
  });
});


