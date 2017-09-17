var images = document.getElementsByTagName('img');
var buttonfemale = document.getElementById('buttonfemale');
var buttonmale = document.getElementById('buttonmale');
var index = 1000;
// array to store images
var images_list = [];

// input images array
for (var i = 0; i < images.length; i++) {
	images_list[i] = images[i];
	var currentImage = images_list[i];
	// setup initial zIndex
	// positive number is closer
	currentImage.style.zIndex = -i;
}

// setup count
var count = 0;
buttonfemale.onclick = function(){
	var showFirst = images_list.shift();
	// setup new zIndex
	showFirst.style.zIndex = - index + count;
	images_list.push(showFirst);
	count++;
}
buttonmale.onclick = function(){
	var showFirst = images_list.shift();
	// setup new zIndex
	showFirst.style.zIndex = - index + count;
	images_list.push(showFirst);
	count++;
}