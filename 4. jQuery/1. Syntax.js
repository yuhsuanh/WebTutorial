
//Ready Event
//Method 1
$(document).ready(function(){
  // jQuery methods go here...
});
//Method 2
$(function() {
  // jQuery methods go here...
});





//Basic Selectors
//Element Selector
$("h1")
//Id Selector
$("#demo")
//Class Selector
$(".para")

//Other Selector Methods
//Select all elements
$("*")
//Select the current HTML element
$(this)
//Select the first <p> element
$("p:first")
//Selects all elements with an href attribute
$("[href]")
//Selects all <a> elements with a target attribute value equal to "_blank" / not equal to "_blank"
$("a[target='_blank']")
$("a[target!='_blank']")
//Selects all <button> elements and <input> elements of type="button"
$(":button")
//Selects all even/odd <tr> elements
$("tr:even")
$("tr:odd")





//Event
//Click
$("button").click();
$("button").click(function() {
	//TODO something
});

//Double Click
$("#demo").dbclick(function() {
	$(this).hide();
});

//Mouse pointer enters the HTML element
$("h1").mouseenter(function() {
	alert("Mouse enter")
});

//Mouse point leaves the HTML element
$("h1").mouseleave(function() {
	alert("Mouse enter")
});

//When the left, middle or right mouse button is pressed down
$("h1").mousedown(function() {
	alert("Mouse pressed")
});

//When the left, middle or right mouse button is released
$("h1").mouseup(function() {
	alert("Mouse released")
});

//hover() Combination of the mouseenter() and mouseleave() methods
$("h1").hover(function() {
	alert("Mouse in and out")
});

//When the form field gets focus
$("input").focus(function(){
  $(this).css("background-color", "#cccccc");
});

//When the form field loses focus
$("input").blur(function(){
  $(this).css("background-color", "#ffffff");
});


//on() method attaches one or more event handlers for the selected elements
//one event
$("p").on("click", function() {
	$(this).hide();
});
//more events
$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});



