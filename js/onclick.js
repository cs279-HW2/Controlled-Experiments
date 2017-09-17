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

function handleMouseMove(event) {
    doc = document.documentElement;
    body = document.body;
    console.log(event.clientX + " " + event.clientY);
}

function handleMouseMoveEnd(event) {
	// stop tracing
}

// setup count
var count = 0;
//click on next button, change pic and start tracing
buttonnext.onclick = function(){
	var showFirst = images_list.shift();
	// setup new zIndex
	showFirst.style.zIndex = - index + count;
	images_list.push(showFirst);
	count++;
	document.onmousemove = handleMouseMove;
}

//click on female or male button, stop tracing
buttonfemale.onclick = function(){
	document.onmousemove = handleMouseMoveEnd;
}

buttonmale.onclick = function(){
	document.onmousemove = handleMouseMoveEnd;
}