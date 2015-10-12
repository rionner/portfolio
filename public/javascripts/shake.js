$(document).ready(function(){
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
