//Get / Set HTML value
//get: text()
//set: text("text")
$("button").click(function() {
	console.log($("#demo").text());	//My paragraph
});
//get: html()
//set: html("HTML text")
$("button").click(function() {
	console.log($("#demo").html());	//My <strong>paragraph</strong>
});
//get: val()
//set: val("Value")
$("button").click(function() {
	console.log($("input").val());
});
//get: attr()
//set: attr(attr, value)
$("button").click(function(){
  alert($("a").attr("href"));
});
$("button").click(function(){
  $("#a").attr({
    "href" : "https://www.google.com/",
    "title" : "Google"
  });
});





//Add Elements
//append() : inserts content AT THE END of the selected HTML elements
$("p").append(" end text ...");
//prepend() : inserts content AT THE BEGINNING of the selected HTML elements
$("p").prepend("Start text ... ");
//inserts content AFTER the selected HTML elements
$("h1").after("text after");
//inserts content BEFORE the selected HTML elements
$("h1").before("text before");





//Remove Elements
//Removes the selected element (and its child elements)
$("div").remove();
$("div").remove(".para");
$("div").remove(".para, p");
//Removes the child elements from the selected element
$("div").empty();





//CSS Classes
//Add class
$("div").addClass("blue");
//Remove class
$("div").removeClass("blue right");
//Toggle class
$("div").toggleClass("blue");





//Set a CSS Property
$("#demo").css("font-size", "32px");
$("#demo").css({"background-color": "yellow", "font-size": "32px"});




//Dimensions
$("div").width();
$("div").height();
$("div").innerWidth();
$("div").innerHeight();
$("div").outerWidth();
$("div").outerHeight();

