//CSS Example
document.getElementById("demo").style.color = "blue";


//Event Example
document.getElementByTagName("button").onclick = function() { };


//Event Listener Example
document.getElementByTagName("button").addEventListener("click", function() { });
document.getElementById("demo").addEventListener("mouseover", function() { });
//Remove EventListener
document.getElementById("demo").removeEventListener("mousemove", function() { });


//Collection Object Example
var para = document.getElementsByTagName("p");
para[0];
para[1];
para[2];
para.length;
