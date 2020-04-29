//Popup Boxes
//Alert Box
window.alert("sometext");

//Confirm Box
if(window.confirm("")) {
	console.log("You pressed OK!");
} else {
	console.log("You pressed Cancel!");
}

//Prompt Box
var txt = prompt("Please enter your name", "Yu-Hsuan Huang");

if (txt == null || txt == "") {
  console.log("User cancelled the prompt.");
} else {
  console.log("Hello " + person + "! How are you today?");
}
