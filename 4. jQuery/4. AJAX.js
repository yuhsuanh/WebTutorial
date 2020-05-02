
//Example
$(document).ready(function() {
	$("button").click(function() {
		$("div").load("demo.txt");
	});
});



//Get Method
//$.get(URL,callback);
$("button").click(function() {
	$.get("demo_test.asp", function(data, status) {
		alert("Data: " + data + "\n" + "Status: " + status);
	});
});



//POST Method
//$.post(URL,data,callback);
$("button").click(function(){
  $.post("demo_test_post.asp", //URL
  {
    name: "Donald Duck",
    city: "Duckburg"
  }, //data
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  }	//callback
  );
});
