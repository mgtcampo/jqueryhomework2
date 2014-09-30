$(document).ready(function(){


$(".Wa").mousedown(function(){
  $(this).addClass("press");
  $(".Wa").fadeOut(1000);
  $(".Wa").fadeIn(3000);
});

$(".Toe").mouseup(function(){
  $(this).removeClass("press");
  $(".Toe").slideDown(3000);
  $(".Toe").slideUp(3000);
  $(".Toe").slideDown(3000);
});


$(".Twee").mousedown(function(){
  $(this).addClass("press");
  $(".Twee").height(100)
});

$(".Foy").mouseup(function(){
  $(this).removeClass("press");
  $(".Foy").fadeOut(40);
  $(".Foy").fadeIn(40);
  $(".Foy").fadeOut(40);
  $(".Foy").fadeIn(40);
  $(".Foy").fadeOut(40);
  $(".Foy").fadeIn(40);
  $(".Foy").fadeIn(40);
  $(".Foy").fadeOut(40);
  $(".Foy").fadeIn(40);
  $(".Foy").fadeIn(40);
  $(".Foy").fadeOut(40);
  $(".Foy").fadeIn(40);
  $(".Foy").fadeIn(40);
  $(".Foy").fadeOut(40);
  $(".Foy").fadeIn(40);
});


$(".Feev").mousedown(function(){
  $(this).addClass("press");
  $(".Feev").animate({height:'40%'});
  $(".Feev").animate({height:'0'});
  $(".Feev").animate({height:'40%'});
});

$(".Seeks").mouseup(function(){
  $(this).removeClass("press");
  $(".Seeks").toggle(1000);
  $(".Seeks").toggle(0);
});



});