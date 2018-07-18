// var $ = require("jquery");

$(document).ready(function() {

$("button").click(function(){
// var category = $('#category').val();
var category= $( "select" ).val();
chrome.tabs.query({'active': true}, function (tabs) {
	console.log(tabs)
    var name= tabs[0].title;
    var url = tabs[0].url;
    $.ajax({
    	url: "https://mine-green-field.herokuapp.com/add",
    	type: "POST",
    	data: JSON.stringify({name: name, category:category, url:url}),
    	contentType: "application/json",
    	success : function(result) {
        alert("added to your Mine ",result); // result is an object which is created from the returned JSON
    }
    })

});

});
})
