//Window Size
//method 1
window.innerHeight
window.innerWidth
//method 2
document.documentElement.clientHeight
document.documentElement.clientWidth
//method 3
document.body.clientHeight
document.body.clientWidth

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


//Other
//open a new window
window.open();
//close the current window
window.close();
//move the current window
window.moveTo();
//resize the current window
window.resizeTo();