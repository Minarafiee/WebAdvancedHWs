$(document).ready(function(){

        $(".hiddenJumpSessionDetails").hide();
        $(".toggleBtn").click(function () {
          $(".hiddenJumpSessionDetails").slideToggle("slow");
        });
 

 $(".go").click(function(){
 var div = $("#col2");
 		div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: ' 50px', opacity: '0.8'}, "slow");
        div.animate({height: '550px', opacity: '0.4'}, "slow");
        div.animate({width: '370px', opacity: '0.8'}, "slow");
    });

$("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
 
});

