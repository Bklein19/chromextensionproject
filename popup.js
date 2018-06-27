$.get('https://destiny.gg' , function(response) {
	
	var position = response.search('"stream-status" class="online"');
	if(position >= 0) {
		document.getElementById("linkText").innerHTML = "Destiny is live!";	
	}
	else {
		document.getElementById("linkText").innerHTML = "Destiny is offline.";
	}

	//console.log(response);
	//console.log("hello world!");
});
	

