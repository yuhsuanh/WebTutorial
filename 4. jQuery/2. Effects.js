//Hide and Show
$("h1").click(function() {
	$(this).hide(1000); //speed can take the following values: "slow", "fast", or milliseconds 
});
$("button").click(function() {
	$("h1").show();
});

//toggle() method : Shown elements are hidden and hidden elements are shown
$("button").click(function() {
	$("#demo").toggle();
});





//Fading
//fade in
$("button").click(function(){
  $("#demo").fadeIn();
  $("#demo").fadeIn("slow");
  $("#demo").fadeIn(3000);
});
//fade out
$("button").click(function(){
  $("#demo").fadeOut();
  $("#demo").fadeOut("slow");
  $("#demo").fadeOut(3000);
});
//fade toggle
$("button").click(function(){
  $("#demo").fadeToggle();
  $("#demo").fadeToggle("slow");
  $("#demo").fadeToggle(3000);
});
//fade to : allows fading to a given opacity
$("button").click(function(){
  $("#demo").fadeTo("slow", 0.15);
  $("#demo").fadeTo("slow", 0.4);
  $("#demo").fadeTo("slow", 0.7);
});





//Sliding
//slide down
$("#flip").click(function(){
  $("#panel").slideDown();
});
//slide up
$("#flip").click(function(){
  $("#panel").slideUp();
});
//slide toggle
$("#flip").click(function(){
  $("#panel").slideToggle();
});





//Animate
//$(selector).animate({params},speed,callback);
$("button").click(function(){
  $("div").animate({left: '250px'});
});
//Manipulate Multiple Properties
$("button").click(function(){
  $("div").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
  });
});
//Using Relative Values
$("button").click(function(){
  $("div").animate({
    left: '250px',
    height: '+=150px',
    width: '+=150px'
  });
});
//Using Pre-defined Values
$("button").click(function(){
  $("div").animate({
    height: 'toggle'
  });
});
//Uses Queue Functionality (It will execute by line order)
$("button").click(function(){
  var div = $("div");
  div.animate({height: '300px', opacity: '0.4'}, "slow");
  div.animate({width: '300px', opacity: '0.8'}, "slow");
  div.animate({height: '100px', opacity: '0.4'}, "slow");
  div.animate({width: '100px', opacity: '0.8'}, "slow");
});





//Stop
//The stop() method works for all jQuery effect functions, including sliding, fading and custom animations
$("#stop").click(function(){
  $("#panel").stop();
});
